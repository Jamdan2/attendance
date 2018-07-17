import { Component } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import PeopleList from '../../components/PeopleList';
import SignInBar from '../../components/SignInBar';
import SignUpDialog from '../../components/SignUpDialog';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style.scss';

class MainPresentation extends Component {
	openSignUpDialog = () => {
		this.props.updateSignUpDialogId(this.props.signInBarValue);
		this.signUpDialog.MDComponent.show();
	};

	render({ people }) {
		return (
			<div>
				<LayoutGrid class={style['full-vertical']}>
					<LayoutGrid.Inner style={{ height: '100%' }}>
						<LayoutGrid.Cell desktopCols="4" style={{ height: '100%' }}>
							<PeopleList {...{ people }} />
						</LayoutGrid.Cell>
						<LayoutGrid.Cell desktopCols="8" style={{ height: '100%' }}>
							<SignInBar openSignUpDialog={this.openSignUpDialog} />
						</LayoutGrid.Cell>
					</LayoutGrid.Inner>
				</LayoutGrid>
				{/* eslint-disable-next-line */}
				<SignUpDialog dialogRef={e => this.signUpDialog = e} />
			</div>
		);
	}
}

export default MainPresentation;
