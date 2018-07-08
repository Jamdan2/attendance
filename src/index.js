import { p } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import './style';

store.subscribe(() => {
	console.log(store.getState());
});

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
