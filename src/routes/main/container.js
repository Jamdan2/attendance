import { connect } from 'preact-redux';
import { actionCreators } from '../../actions';
import 'preact-material-components/LayoutGrid/style.css';
import MainPresentation from './presentation';

const mapStateToProps = state => ({
	people: state.people,
	signInBarValue: state.signInBarValue
});

const mapDispatchToProps = dispatch => ({
	updateSignUpDialogId: id => dispatch(actionCreators.updateSignUpDialogId(id))
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainPresentation);

export default MainContainer;
