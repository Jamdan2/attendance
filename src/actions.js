export const actionTypes = {
	ADD_PERSON: 'ADD_PERSON',
	SIGN_IN: 'SIGN_IN',
	SIGN_OUT: 'SIGN_OUT',
	UPDATE_HOURS: 'UPDATE_HOURS',
	UPDATE_SIGN_IN_BAR_VALUE: 'UPDATE_SIGN_IN_BAR_VALUE',
	UPDATE_SIGN_IN_BAR_PERSON: 'UPDATE_SIGN_IN_BAR_PERSON',
	UPDATE_SIGN_UP_DIALOG_NAME: 'UPDATE_SIGN_UP_DIALOG_NAME',
	UPDATE_SIGN_UP_DIALOG_ID: 'UPDATE_SIGN_UP_DIALOG_ID'
};

export const actionCreators = {
	addPerson: (id, name) => ({ type: actionTypes.ADD_PERSON, id, name }),
	signIn: (id) => ({ type: actionTypes.SIGN_IN, id }),
	signOut: (id) => ({ type: actionTypes.SIGN_OUT, id }),
	updateSignInBarValue: (value) => ({ type: actionTypes.UPDATE_SIGN_IN_BAR_VALUE, value }),
	updateSignInBarPerson: (person) => ({ type: actionTypes.UPDATE_SIGN_IN_BAR_PERSON, person }),
	updateSignUpDialogName: (name) => ({ type: actionTypes.UPDATE_SIGN_UP_DIALOG_NAME, name }),
	updateSignUpDialogId: (id) => ({ type: actionTypes.UPDATE_SIGN_UP_DIALOG_ID, id })
};
