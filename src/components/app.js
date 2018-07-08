import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { connect } from 'preact-redux';
import { addPerson } from '../actions';
import Header from './header';
import Main from '../routes/main';
import reducer from '../reducer';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Main path="/" />
				</Router>
			</div>
		);
	}
}
