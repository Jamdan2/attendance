import { combineReducers, Action, Reducer } from 'redux';
import {PeopleList, Person, State} from "./state";

import { ActionTypes } from "./actions";

const numOfPeople: Reducer<number> = (state = 0, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_PERSON:
            return state + 1;
        case ActionTypes.REMOVE_PERSON:
            return state - 1;
        default:
            return state;
    }
};

const people: Reducer<Array<Person>> = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_PERSON:
            return [...state, action.payload];
        case ActionTypes.REMOVE_PERSON:
            return state.filter((person) => person.id !== action.payload);
        case ActionTypes.TOGGLE_PERSON:
            return state.map(
                (person) => person.id === action.payload
                    ? { ...person, signedIn: !person.signedIn }
                    : person
            );
        default:
            return state;
    }
};

const peopleList: Reducer<PeopleList> = combineReducers({
    numOfPeople,
    people
});

export const reducer: Reducer<State> = combineReducers({
    peopleList
});
