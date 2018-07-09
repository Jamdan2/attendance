import { Component } from 'preact';
import { connect } from 'preact-redux';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import PeopleList from '../../components/people-list';
import SignInBarContainer from '../../containers/sign-in-bar-container';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/TextField/style.css';
import style from './style.scss';

class Main extends Component {
	// TODO actually do something here
	openSignUpDialog = () => {};

	render({ people }) {
		return (
			<LayoutGrid class={style['full-vertical']}>
				<LayoutGrid.Inner style={{ height: '100%' }}>
					<LayoutGrid.Cell desktopCols="4" style={{ height: '100%' }}>
						<PeopleList {...{ people }} />
					</LayoutGrid.Cell>
					<LayoutGrid.Cell desktopCols="8" style={{ height: '100%' }}>
						<SignInBarContainer openSignUpDialog={this.openSignUpDialog} />
					</LayoutGrid.Cell>
				</LayoutGrid.Inner>
			</LayoutGrid>
		);
	}
}

export default connect(
	state => ({ people: state.people })
)(Main);
