import './asset/sass/main.scss';

require("babel-polyfill");

import { render } from 'react-dom';
import { Router,browserHistory } from 'react-router';
import { Provider } from 'mobx-react'
import routes from './routes';

import AppState from './store/home'
const appState = new AppState();
console.info(appState)

render(
    <Provider store={appState}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);