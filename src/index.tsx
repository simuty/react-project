import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// !有先后之分 ？？
import Page from './Page';

import './style/antd/index.less'
import './style/index.less'



import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={configureStore}>
        <React.StrictMode>
            <Page />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
