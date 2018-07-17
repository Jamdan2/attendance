import FormField from 'preact-material-components/FormField';
import TextField from 'preact-material-components/TextField';
import Button from 'preact-material-components/Button';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/Button/style.css';

const SignInBar = ({ value, person, onInput, openSignUpDialog, onSignIn, onSignOut }) => (
	<FormField>
		<TextField {...{ value, onInput }} />
		{
			person === null
				? <Button onClick={openSignUpDialog}>sign up</Button>
				: person.signedIn
					? <Button onClick={onSignIn}>sign out</Button>
					: <Button onClick={onSignOut}>sign in</Button>
		}
		{person ? <Button>check hours</Button> : null}
	</FormField>
);

export default SignInBar;