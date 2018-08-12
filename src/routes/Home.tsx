import { h } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import { PeopleListContainer } from "../containers/PeopleListContainer";

export const Home = (props: HomeProps) => (
    <div id="home">
        <LayoutGrid>
            <LayoutGrid.Inner>
                <LayoutGrid.Cell desktopCols={4}>
                    <PeopleListContainer />
                </LayoutGrid.Cell>
            </LayoutGrid.Inner>
        </LayoutGrid>
    </div>
);

export interface HomeProps {
    path: string
}
