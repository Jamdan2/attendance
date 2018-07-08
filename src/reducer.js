import { actionTypes } from './actions';
import { combineReducers } from 'redux';

export default combineReducers({
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
					(person.id === action.id)
						? { ...person, signedIn: true, signedInAt: new Date().getTime() }
						: person
				);
			}
			case actionTypes.SIGN_OUT: {
				return state.map(person =>
					(person.id === action.id)
						? { ...person, hours: person.hours + (new Date().getTime() - person.signedInAt), signedIn: false, signedInAt: null }
						: person
				);
			}
			case actionTypes.ADD_HOURS: {
				return state.map(person =>
					(person.id === action.id)
						? { ...person, hours: person.hours + action.hours }
						: person
				);
			}
			default:
				return state;
		}
	}
});
