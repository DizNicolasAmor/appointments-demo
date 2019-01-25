export const FormStructure = [
	{
		id: 'step1',
		title: 'PROFILE',
		buttonText: 'NEXT',
		inputs: [
			{
				name: 'name',
				placeholder: '',
				title: 'name',
				type: 'string'
			},
			{
				name: 'lastname',
				placeholder: '',
				title: 'last name',
				type: 'string'
			},
			{
				name: 'age',
				placeholder: '',
				title: 'age',
				type: 'number'
			},
			{
				name: 'id',
				placeholder: '',
				title: 'id',
				type: 'number'
			},
			{
				name: 'phone',
				placeholder: '',
				title: 'phone',
				type: 'number'
			},
			{
				name: 'email',
				placeholder: '',
				title: 'email',
				type: 'email'
			}
		]
	},
	{
		id: 'step2',
		title: 'REASON',
		buttonText: 'NEXT',
		inputs: [
			{
				name: 'reasons',
				placeholder: '',
				title: 'Select the reasons',
				type: 'checkbox'
			}
		]
	},
	{
		id: 'step3',
		title: 'SCHEDULE',
		buttonText: 'CONFIRM',
		inputs: [
			{
				name: 'date',
				placeholder: 'Month dd, YYYY',
				title: 'date',
				type: 'date'
			},
			{
				name: 'hour',
				placeholder: '',
				title: 'hour',
				type: 'select'
			}
		]
	}
];
