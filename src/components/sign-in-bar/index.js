import { Component } from 'preact';
import FormField from 'preact-material-components/FormField';
import TextField from 'preact-material-components/TextField';
import Button from 'preact-material-components/Button';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/Button/style.css';

class SignInBar extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
			person: null
		};
		this.onInput = this.onInput.bind(this);
	}

	onInput(e) {
		let personExists = false;
		this.setState({ value: e.target.value });
		this.props.people.forEach((person) => {
			if (person.id === parseInt(this.state.value)) {
				this.setState({ person });
				personExists = true;
			}
		});
		if (!personExists) this.setState({ person: null });
	}

	render({ openSignUpDialog, onSignUp, onSignIn, onSignOut, onCheckHours }) {
		return (
			<FormField>
				<TextField value={this.state.value} onInput={this.onInput} />
				{
					this.state.person === null
						? <Button onClick={openSignUpDialog(this.state.value)}>sign up</Button>
						: this.state.person.signedIn
							? <Button onClick={onSignOut(parseInt(this.state.value))}>sign out</Button>
							: <Button onClick={onSignIn(parseInt(this.state.value))}>sign in</Button>
				}
				{this.state.person ? <Button onClick={onCheckHours}>check hours</Button> : null}
			</FormField>
		);
	}
}

export default SignInBar;
