import React from 'react';
import { Row, Col  } from 'antd'
import Register from './Register'
import Login from './Login'


function BasicForms() {
    return (
        <Row gutter={16}>
            <Col md={12}>
                <Register />
            </Col>
            <Col md={12}>
                <Login />
            </Col>
        </Row >
    );

}

export default BasicForms;