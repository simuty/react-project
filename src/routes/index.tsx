import React from 'react';
// import { Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import { Redirect } from 'react-router-dom';

export default [
    {
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: <Redirect to="/home" />
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
