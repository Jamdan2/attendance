import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import { connect } from 'preact-redux';
import SignUpDialog from '../../components/sign-up-dialog';

const mapStateToProps = (state) => ({
	name: state.signUpDialogName,
	id: state.signUpDialogId
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(actionCreators, dispatch));

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	updateSignUpDialogName: () => dispatchProps.updateSignUpDialogName(stateProps.name),
	updateSignUpDialogId: () => dispatchProps.updateSignUpDialogId(stateProps.id),
	onSubmit: () => dispatchProps.addPerson(stateProps.id, stateProps.name),
	dialogRef: ownProps.dialogRef
});

const SignUpDialogContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignUpDialog);

export default SignUpDialogContainer;
