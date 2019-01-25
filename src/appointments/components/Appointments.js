import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormStructure as data } from '../utils/FormStructure';
import { FormWrapper } from '../styles/appointments';
import Step from './Step';
import { getInitialValues } from '../utils/FormInitialValues';
import { getValidation } from '../utils/FormValidations';
import { Title } from '../styles/commons';

const Appointments = ({ currentStep, setStep, updateForm, isFormSubmited, submitAllForms }) => (
	<FormWrapper>
		<Title isLarge>APPOINTMENTS</Title>
		{data.map((stepData, ix) => {
			const formNumber = ix + 1;
			return (
				<Formik
					key={stepData.id}
					initialValues={getInitialValues(formNumber)}
					validationSchema={getValidation(formNumber)}
					onSubmit={values => {
						updateForm(values, formNumber);
						if (formNumber === 3) submitAllForms();
						else setStep(formNumber + 1);
					}}
					render={({ values, handleChange }) => (
						<Step
							values={values}
							handleChange={handleChange}
							currentStep={currentStep}
							setStep={setStep}
							stepData={stepData}
							ix={formNumber}
							isFormSubmited={isFormSubmited}
						/>
					)}
				/>
			);
		})}
	</FormWrapper>
);

Appointments.propTypes = {
	currentStep: PropTypes.number.isRequired,
	setStep: PropTypes.func.isRequired,
	isFormSubmited: PropTypes.func.isRequired,
	updateForm: PropTypes.func.isRequired
};

export default Appointments;
