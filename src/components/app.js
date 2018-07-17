import { Component } from 'preact';
import { Router } from 'preact-router';
import Header from './Header';
import Main from '../routes/Main';

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
