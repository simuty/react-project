import * as React from 'react';
import { Row, Col, Card } from 'antd'

interface IPostProps { }

interface IPostState { }

export default class Post extends React.Component<IPostProps, IPostState> {
    public render() {
        return (
            <div>
                <Row gutter={[10, 10]}>
                    <Col md={12}>
                        <div>

                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}