import { h } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import {PeopleList} from "../components/PeopleList";

export const Home = (props: HomeProps) => (
    <div id="home">
        <LayoutGrid>
            <LayoutGrid.Inner>
                <LayoutGrid.Cell desktopCols={4}>
                    <PeopleList people={[]}/>
                </LayoutGrid.Cell>
            </LayoutGrid.Inner>
        </LayoutGrid>
    </div>
);

export interface HomeProps {
    path: string
}
