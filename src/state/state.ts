import { DeepReadonly } from 'utility-types';

export type State = DeepReadonly<{
    peopleList: PeopleList
}>;

export type PeopleList = DeepReadonly<{
    numOfPeople: number
    people: Array<Person>
}>;

export type Person = DeepReadonly<{
    id: number
    name: string
    signedIn: boolean
    time: Time
}>;

export type Time = DeepReadonly<{
    hours: number
    minutes: number
    seconds: number
}>;

export const initialState: State = {
    peopleList: {
        numOfPeople: 0,
        people: []
    }
};
