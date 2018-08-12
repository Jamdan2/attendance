import { connect } from 'preact-redux';

import { PeopleList } from "../components/PeopleList";
import {State} from "../state/state";

export const PeopleListContainer = connect(
    (state: State) => ({
        people: state.peopleList.people
    })
)(PeopleList);
