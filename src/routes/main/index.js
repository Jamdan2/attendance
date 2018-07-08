import { Component } from 'preact';
import { connect } from 'preact-redux';
import { addPerson, signIn, signOut } from '../../actions';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import PeopleList from '../../components/people-list';
import SignInBar from '../../components/sign-in-bar';
import Dialog from 'preact-material-components/Dialog';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/TextField/style.css';
import style from './style.scss';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			idTextFieldValue: '',
			nameTextFieldValue: ''
		};
	}

	openSignUpDialog = (id) => () => {
		this.signUpDialog.MDComponent.show();
		this.setState({ idTextFieldValue: id });
	};



	render({ people, onSignUp, onSignIn, onSignOut }) {
		return (
			<div>
				<LayoutGrid class={style['full-vertical']}>
					<LayoutGrid.Inner style={{ height: '100%' }}>
						<LayoutGrid.Cell desktopCols="4" style={{ height: '100%' }}>
							<PeopleList people={people} />
						</LayoutGrid.Cell>
						<LayoutGrid.Cell desktopCols="8" style={{ height: '100%' }}>
							<SignInBar
								people={people}
								openSignUpDialog={this.openSignUpDialog}
								onSignUp={onSignUp}
								onSignIn={onSignIn}
								onSignOut={onSignOut}
							/>
						</LayoutGrid.Cell>
					</LayoutGrid.Inner>
				</LayoutGrid>
				<Dialog ref={e => this.signUpDialog = e} onAccept={onSignUp(this.state.idTextFieldValue, this.state.nameTextFieldValue)}>
					<Dialog.Header>Sign Up</Dialog.Header>
					<Dialog.Body>
						<TextField
							type="number"
							label="ID"
							value={this.state.idTextFieldValue}
							onInput={e => this.setState({ idTextFieldValue: e.target.value })}
						/>
						<TextField
							label="Name"
							value={this.state.nameTextFieldValue}
							onInput={e => this.setState({ nameTextFieldValue: e.target.value })}
						/>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton cancel>cancel</Dialog.FooterButton>
						<Dialog.FooterButton accept>sign up</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}

export default connect(
	state => ({ people: state.people }),
	dispatch => ({
		onSignUp: (id, name) => () => {
			dispatch(addPerson(id, name));
		},
		onSignIn: (id) => () => {
			dispatch(signIn(id));
		},
		onSignOut: (id) => () => {
			dispatch(signOut(id));
		}
	})
)(Main);
