import { h } from 'preact';

export const Home = (props: HomeProps) => (
    <div id="home">
        <h1>Welcome home my dudes</h1>
    </div>
);

export interface HomeProps {
    path: string
}
