import React from 'react';
// import { Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

const routerConfig: RouteConfig[] = [
    {
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to="/home" />
            },
            {
                path: '/home',
                component: Home,
            },
            {
                path: '/login',
                component: Login,
            },
        ],
    },
];
export default routerConfig;
