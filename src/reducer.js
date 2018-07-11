import { actionTypes } from './actions';
import { combineReducers } from 'redux';

// noinspection JSUnusedGlobalSymbols
const reducers = {
	amtOfPeople: (state = 0, action) => {
		switch (action.type) {
			case actionTypes.ADD_PERSON:
				return state + 1;
			default:
				return state;
		}
	},
	people: (state = [], action) => {
		switch (action.type) {
			case actionTypes.ADD_PERSON:
				return [
					...state,
					{
						id: action.id,
						name: action.name,
						hours: 0,
						signedIn: false,
						signedInAt: null
					}
				];
			case actionTypes.SIGN_IN: {
				return state.map(person =>
					person.id === action.id
						? { ...person, signedIn: true, signedInAt: new Date().getTime() }
						: person
				);
			}
			case actionTypes.SIGN_OUT: {
				return state.map(person =>
					person.id === action.id
						? { ...person, hours: person.hours + (new Date().getTime() - person.signedInAt), signedIn: false, signedInAt: null }
						: person
				);
			}
			case actionTypes.UPDATE_HOURS: {
				return state.map(person =>
					person.id === action.id
						? { ...person, hours: person.hours + action.hours }
						: person
				);
			}
			default:
				return state;
		}
	},
	signInBarValue: (state = '', action) => {
		switch (action.type) {
			case actionTypes.UPDATE_SIGN_IN_BAR_VALUE:
				return action.value;
			default:
				return state;
		}
	},
	signInBarPerson: (state = null, action) => {
		switch (action.type) {
			case actionTypes.UPDATE_SIGN_IN_BAR_PERSON:
				return action.person;
			default:
				return state;
		}
	},
	signUpDialogName: (state = '', action) => {
		switch (action.type) {
			case actionTypes.UPDATE_SIGN_UP_DIALOG_NAME:
				return action.name;
			default:
				return state;
		}
	},
	signUpDialogId: (state = '', action) => {
		switch (action.type) {
			case actionTypes.UPDATE_SIGN_UP_DIALOG_ID:
				return action.id;
			default:
				return state;
		}
	}
};

const reducer = combineReducers(reducers);

export default reducer;
