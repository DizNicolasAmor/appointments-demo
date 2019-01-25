import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import InlineSVG from 'svg-inline-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Field, ErrorMessage } from 'formik';
import Checkbox from './Checkbox';
import { Title } from '../styles/commons';
import { StepWrapper, ButtonWrapper, Button, Inputs, InputWrapper } from '../styles/appointments';
import { startDate, endDate, daysToExclude } from '../utils/DateValues';

const svgEdit = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xml:space="preserve"><path d="M21.635,6.366c-0.467-0.772-1.043-1.528-1.748-2.229c-0.713-0.708-1.482-1.288-2.269-1.754L19,1C19,1,21,1,22,2S23,5,23,5  L21.635,6.366z M10,18H6v-4l0.48-0.48c0.813,0.385,1.621,0.926,2.348,1.652c0.728,0.729,1.268,1.535,1.652,2.348L10,18z M20.48,7.52  l-8.846,8.845c-0.467-0.771-1.043-1.529-1.748-2.229c-0.712-0.709-1.482-1.288-2.269-1.754L16.48,3.52  c0.813,0.383,1.621,0.924,2.348,1.651C19.557,5.899,20.097,6.707,20.48,7.52z M4,4v16h16v-7l3-3.038V21c0,1.105-0.896,2-2,2H3  c-1.104,0-2-0.895-2-2V3c0-1.104,0.896-2,2-2h11.01l-3.001,3H4z"/></svg>`;
const hourOptions = [
	{ value: '', label: '' },
	{ value: '10:00', label: '10:00' },
	{ value: '11:00', label: '11:00' },
	{ value: '12:00', label: '12:00' },
	{ value: '13:00', label: '13:00' },
	{ value: '14:00', label: '14:00' },
	{ value: '15:00', label: '15:00' }
];
const reasonsOptions = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'];

const Step = ({ values, handleChange, currentStep, setStep, stepData, ix, isFormSubmited }) => (
	<StepWrapper>
		<Title isInactive={currentStep !== ix}>{stepData.title}</Title>
		<InlineSVG
			src={svgEdit}
			onClick={() => {
				setStep(ix);
			}}
			className={`${
				ix === 3 || currentStep === ix || !isFormSubmited(ix) || currentStep < ix
					? 'edit hide'
					: 'edit show'
			}`}
		/>
		<Collapse isOpened={currentStep === ix}>
			<Form style={{ padding: '1px 0' }}>
				<Inputs>
					{stepData.inputs.map(input => (
						<InputWrapper key={input.name}>
							<div className="input title">{input.title}</div>
							{input.type === 'select' && (
								<select
									value={values.hour}
									onChange={handleChange}
									type={input.type}
									name={input.name}
									className="input body"
									placeholder={input.placeholder}
								>
									{hourOptions.map(o => (
										<option key={o.value} value={o.value} label={o.label} />
									))}
								</select>
							)}
							{input.type === 'checkbox' && (
								<div className="checkbox-wrapper">
									{reasonsOptions.map(option => (
										<Checkbox key={option} name="reasons" value={option} />
									))}
								</div>
							)}
							{input.type === 'date' && (
								<Field>
									{({ form }) => (
										<DatePicker
											className="input body"
											type={input.type}
											placeholderText={input.placeholder}
											selected={values.date}
											dateFormat="MMMM dd yyyy"
											minDate={startDate}
											maxDate={endDate}
											excludeDates={daysToExclude}
											onChange={date => {
												form.setFieldValue(input.name, date);
											}}
										/>
									)}
								</Field>
							)}
							{input.type !== 'select' && input.type !== 'checkbox' && input.type !== 'date' && (
								<Field
									type={input.type}
									name={input.name}
									className="input body"
									placeholder={input.placeholder}
								/>
							)}
							<ErrorMessage
								name={input.name}
								component="div"
								className={`${input.type === 'checkbox' ? 'input error checkbox' : 'input error'}`}
							/>
						</InputWrapper>
					))}
				</Inputs>
				<ButtonWrapper>
					<Button type="submit">{stepData.buttonText}</Button>
				</ButtonWrapper>
			</Form>
		</Collapse>
	</StepWrapper>
);

Step.propTypes = {
	values: PropTypes.objectOf(PropTypes.any).isRequired,
	handleChange: PropTypes.func.isRequired,
	currentStep: PropTypes.number.isRequired,
	setStep: PropTypes.func.isRequired,
	stepData: PropTypes.objectOf(PropTypes.any).isRequired,
	ix: PropTypes.number.isRequired
};

export default Step;
