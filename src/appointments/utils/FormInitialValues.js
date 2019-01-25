export const getInitialValues = stepNumber => {
	switch (stepNumber) {
		default:
			return 'Invalid stepNumber param in getInitialValues()';
		case 1:
			return {
				name: '',
				lastname: '',
				age: '',
				id: '',
				phone: '',
				email: ''
			};
		case 2:
			return {
				reasons: ''
			};
		case 3:
			return {
				date: undefined,
				hour: ''
			};
	}
};
