import React from 'react';
// !后期按需加载 antd
import './App.css';
import BasicLayout from './containers/App/BasicLayout';

import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import store from './redux/configureStore';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <BasicLayout>
                <HashRouter>{renderRoutes(routes)}</HashRouter>
            </BasicLayout>
        </Provider>
    );
}

export default App;
