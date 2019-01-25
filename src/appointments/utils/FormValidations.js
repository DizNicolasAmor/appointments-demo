import * as Yup from 'yup';
import { startDate, endDate } from './DateValues';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const getValidation = stepNumber => {
	switch (stepNumber) {
		default:
			return 'Invalid stepNumber param in getValidation()';
		case 1:
			return Yup.object().shape({
				name: Yup.string()
					.min(1, 'Too Short!')
					.max(50, 'Too Long!')
					.required('Required'),
				lastname: Yup.string()
					.min(1, 'Too Short!')
					.max(50, 'Too Long!')
					.required('Required'),
				age: Yup.number()
					.positive('Invalid age')
					.integer('Invalid age')
					.min(1, 'Invalid age')
					.max(120, 'Invalid age')
					.required('Required'),
				id: Yup.number()
					.positive('Invalid id')
					.integer('Invalid id')
					.min(10000000, 'Invalid id')
					.max(90000000, 'Invalid id')
					.required('Required'),
				phone: Yup.string()
					.matches(phoneRegExp, 'Phone number is not valid')
					.max(12, 'Phone number is not valid')
					.required('Required'),
				email: Yup.string()
					.email('Invalid email')
					.required('Required')
			});
		case 2:
			return Yup.object().shape({
				reasons: Yup.string()
					.min(1, 'Required')
					.required('Required')
			});
		case 3:
			return Yup.object().shape({
				date: Yup.date()
					.min(startDate, 'Invalid date')
					.max(endDate, 'Invalid date')
					.required('Required'),
				hour: Yup.string()
					.min(1, 'Required')
					.required('Required')
			});
	}
};
