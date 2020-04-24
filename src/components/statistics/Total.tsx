import React from 'react'
import { Row, Col, Card, Statistic } from 'antd'

interface Props {

}

const Total = (props: Props) => {

    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

    const onFinishDealine = () => {
        console.log('地球🌍已经完蛋')
    }
    return (
        <>
            <Row gutter={[10, 10]}>
                <Col>
                    数据总览
                </Col>
            </Row>

            <Row gutter={[40, 16]}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title='营收总额'
                            value='198333337.9999222'
                            valueStyle={{ color: '#3f8600' }}
                            prefix='$ '
                            precision={2}
                        >
                        </Statistic>
                    </Card>
                </Col>

                <Col span={6}>

                    <Card>
                        <Statistic
                            title='营收金额'
                            value='1922287.9999222'
                            valueStyle={{ color: 'blue' }}
                            prefix='$ '
                            precision={2}
                        >
                        </Statistic>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title='实收金额'
                            value='19222287.9999222'
                            valueStyle={{ color: 'green' }}
                            prefix='$ '
                            precision={2}
                        >
                        </Statistic>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic.Countdown
                            title='距离💥'
                            value={deadline}
                            format='HH:mm:ss:SSS'
                            valueStyle={{ color: 'red' }}
                            onFinish={onFinishDealine}
                        />

                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Total
