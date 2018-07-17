import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import { actionCreators } from '../../actions';
import SignInBarPresentation from './presentation';

const mapStateToProps = (state) => ({
	people: state.people,
	value: state.signInBarValue,
	person: state.signInBarPerson
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(actionCreators, dispatch));

const mergeProps = (stateProps, dispatchProps, { openSignUpDialog }) => ({
	...stateProps,
	...dispatchProps,
	onInput: (event) => {
		dispatchProps.updateSignInBarValue(event.target.value);
		let personExists = false;
		stateProps.people.forEach((person) => {
			if (person.id === parseInt(this.props.value, 10)) {
				dispatchProps.updateSignInBarPerson(person);
				personExists = true;
			}
		});
		if (!personExists) dispatchProps.updateSignInBarPerson(null);
	},
	openSignUpDialog,
	onSignIn: () => {
		dispatchProps.signIn(parseInt(stateProps.value, 10));
		dispatchProps.updateSignInBarValue('');
	},
	onSignOut: () => {
		dispatchProps.signOut(parseInt(stateProps.value, 10));
		dispatchProps.updateSignInBarValue('');
	}
});

const SignInBarContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignInBarPresentation);

export default SignInBarContainer;
