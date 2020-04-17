import React from 'react';
// !后期按需加载 antd
import './App.css';
import BasicLayout from './containers/App/BasicLayout';

import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import { Button } from 'antd';

function App() {
    return (
        <BasicLayout>
            <HashRouter>
                <div className="App">
                    <Button> this is antd button </Button>
                </div>
                {renderRoutes(routes)}
            </HashRouter>
        </BasicLayout>
    );
}

export default App;
