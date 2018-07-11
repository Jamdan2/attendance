import { Component } from 'preact';
import { connect } from 'preact-redux';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import PeopleList from '../../components/people-list';
import SignInBarContainer from '../../containers/sign-in-bar-container';
import SignUpDialogContainer from '../../containers/sign-up-dialog-container';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/TextField/style.css';
import style from './style.scss';

class Main extends Component {
	// TODO created person has no name!?
	openSignUpDialog = () => this.signUpDialog.MDComponent.show();

	render({ people }) {
		return (
			<div>
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
				<SignUpDialogContainer dialogRef={e => this.signUpDialog = e} />
			</div>
		);
	}
}

export default connect(
	state => ({ people: state.people })
)(Main);
