import React from 'react';
import logo from './logo.svg';
// !后期按需加载 antd
import './App.css';
import BasicLayout from './containers/App/BasicLayout';

import routes from './routes';
import { renderRoutes } from 'react-router-config';

import { Button } from 'antd';

function App() {
    return (
        <BasicLayout>
            <div className="App">
                <Button> this is antd button </Button>
            </div>
            {renderRoutes(routes)}
        </BasicLayout>
    );
}

export default App;
