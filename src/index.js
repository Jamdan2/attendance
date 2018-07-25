import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import { actionCreators } from './actions';
import './style';

setInterval(() => store.dispatch(actionCreators.tick()), 1000);

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
