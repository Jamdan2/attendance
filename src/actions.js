export const actionTypes = {
	ADD_PERSON: 'ADD_PERSON',
	SIGN_IN: 'SIGN_IN',
	SIGN_OUT: 'SIGN_OUT',
	UPDATE_HOURS: 'UPDATE_HOURS'
};

export const addPerson = (id, name) => ({ type: actionTypes.ADD_PERSON, id, name });

export const signIn = (id) => ({ type: actionTypes.SIGN_IN, id });

export const signOut = (id) => ({ type: actionTypes.SIGN_OUT, id });

export const updateHours = (id, hours) => ({ type: actionTypes.UPDATE_HOURS, id, hours });
