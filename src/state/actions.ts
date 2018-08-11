import { action } from 'typesafe-actions';

import {Person} from "./state";

export const enum ActionTypes {
    ADD_PERSON = 'ADD_PERSON',
    REMOVE_PERSON = 'REMOVE_PERSON',
    TOGGLE_PERSON = 'TOGGLE_PERSON',
}

export const addPerson = (person: Person) => action(ActionTypes.ADD_PERSON, person);
export const removePerson = (id: number) => action(ActionTypes.REMOVE_PERSON, id);
export const togglePerson = (id: number) => action(ActionTypes.TOGGLE_PERSON, id);
