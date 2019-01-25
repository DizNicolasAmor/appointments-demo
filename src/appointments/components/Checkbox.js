import React from 'react';
import { Field } from 'formik';

const Checkbox = props => (
	<Field name={props.name}>
		{({ field, form }) => (
			<div className="input checkbox">
				<label>
					<input
						type="checkbox"
						{...props}
						checked={field.value.includes(props.value)}
						onChange={() => {
							const auxArray = field.value.split(' , ').filter(Boolean);
							if (auxArray.includes(props.value)) {
								const nextValueArr = auxArray.filter(value => value !== props.value);
								form.setFieldValue(props.name, nextValueArr.join(' , '));
							} else {
								const nextValue = auxArray.length
									? `${field.value} , ${props.value}`
									: `${props.value}`;
								form.setFieldValue(props.name, nextValue);
							}
						}}
					/>
					{props.value}
				</label>
			</div>
		)}
	</Field>
);

export default Checkbox;
