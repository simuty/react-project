import React from 'react'
import { Col, Row, Tabs } from 'antd'

const { TabPane } = Tabs;

const Reports = () => {

    const onChangeTabs = (key: string) => {
        console.log('切换', key)
    }
    return (
        <>
            <Col> 数据营收 </Col>
            <Col>
                <Row>
                    <Tabs defaultActiveKey='1' onChange={onChangeTabs}>
                        <TabPane tab='线上营收' key='1'>
                            <Row>
                                <Col span={12}>
                                </Col>
                                <Col span={12}>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab='线下营收' key='2'>
                            <Row>
                                <Col span={12}>
                                </Col>
                                <Col span={12}>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab='营收比对' key='3'>
                            <Row>
                                <Col span={12}>
                                </Col>
                                <Col span={12}>
                                </Col>
                            </Row>
                        </TabPane>

                    </Tabs>
                </Row>
            </Col>
        </>
    )
}

export default Reports
