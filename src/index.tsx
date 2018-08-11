import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import { App } from './components/App'
import { store } from "./state/store";
import './style/index.scss';

render(<Provider store={store}><App /></Provider>, document.body, document.getElementById('root'));
