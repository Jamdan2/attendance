import Dialog from 'preact-material-components/Dialog';
import FormField from 'preact-material-components/FormField';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/Dialog/style.css';

const SignUpDialog = ({ dialogRef, name, id, updateSignUpDialogName, updateSignUpDialogId, onSubmit }) => (
	<Dialog onAccept={onSubmit} ref={dialogRef}>
		<Dialog.Header>Sign Up</Dialog.Header>
		<Dialog.Body>
			<FormField>
				<TextField label="Name" value={name} onInput={updateSignUpDialogName} />
				<TextField label="ID" value={id} onInput={updateSignUpDialogId} />
			</FormField>
		</Dialog.Body>
		<Dialog.Footer>
			<Dialog.FooterButton cancel>cancel</Dialog.FooterButton>
			<Dialog.FooterButton accept>submit</Dialog.FooterButton>
		</Dialog.Footer>
	</Dialog>
);

export default SignUpDialog;
