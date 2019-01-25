import React from 'react';
import moment from 'moment';
import Appointments from './components/Appointments';
import { GlobalStyle } from './styles/commons';

class AppointmentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			form1: {},
			form2: {},
			form3: {}
		};
	}

	setStep = currentStep => {
		this.setState({ currentStep });
	};

	updateForm = (form, formNumber) => {
		this.setState({ [`form${formNumber}`]: { ...form } });
		if (formNumber === 3) {
			const dateFormat = 'LL';
			const nextDate = moment(form.date).format(dateFormat);
			const form3 = { ...form, date: nextDate };
			this.setState({ form3 });
		}
	};

	submitAllForms = () => {
		const { form1, form2, form3 } = this.state;
		const bigForm = { profile: { ...form1 }, reason: { ...form2 }, schedule: { ...form3 } };
		alert(JSON.stringify(bigForm, null, 2));
	};

	isFormSubmited = number => {
		const currentForm = this.state[`form${number}`];
		return JSON.stringify(currentForm) !== '{}';
	};

	render() {
		const { currentStep } = this.state;
		return (
			<div>
				<GlobalStyle />
				<Appointments
					currentStep={currentStep}
					setStep={this.setStep}
					updateForm={this.updateForm}
					isFormSubmited={this.isFormSubmited}
					submitAllForms={this.submitAllForms}
				/>
			</div>
		);
	}
}

export default AppointmentsContainer;
