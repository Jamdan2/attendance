import { Component } from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style';


export default class Header extends Component {
	render() {
		return (
			<Toolbar>
				<Toolbar.Row>
					<Toolbar.Section align-start>
						<Toolbar.Title>Attendance</Toolbar.Title>
					</Toolbar.Section>
					<Toolbar.Section align-end>
						<Toolbar.Icon>account_circle</Toolbar.Icon>
					</Toolbar.Section>
				</Toolbar.Row>
			</Toolbar>
		);
	}
}
