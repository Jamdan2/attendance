import { h } from 'preact';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css'

import { Person } from "../state/state";
import { getDisplayTime } from '../util'

export const PeopleList = ({ people }: PeopleListProps) => (
    <List>
        {people.map(
            (person: Person) => <List.Item two-line={true}>
                <List.TextContainer>
                    <List.PrimaryText>
                        {person.name}
                    </List.PrimaryText>
                    <List.SecondaryText>
                        {getDisplayTime(person.time)}
                    </List.SecondaryText>
                </List.TextContainer>
            </List.Item>
        )}
    </List>
);

export interface PeopleListProps {
    people: Array<Person>
}
