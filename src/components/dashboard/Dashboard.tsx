import * as React from 'react';
import { Row, Col, Card, Timeline, List, Avatar } from 'antd'
import { HeartFilled } from '@ant-design/icons';
import EchartsProjects from './EchartsProjects'
import EchartsViews from './EchartsViews'


const TimelineItem = Timeline.Item;
const ListItem = List.Item;

interface IDashBoardProps { }

interface IDashBoardState { }

export default class DashBoard extends React.Component<IDashBoardProps, IDashBoardState> {


    listData = () => {
        const listData = [];
        for (let i = 0; i < 3; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        return listData
    };


    tabListNoTitle = [
        {
            key: 'article',
            tab: 'article',
        },
        {
            key: 'app',
            tab: 'app',
        },
        {
            key: 'project',
            tab: 'project',
        },
    ];

    public render() {
        return (
            <div>
                <Row gutter={[10, 10]}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}
                                hoverable={true}
                            >
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        {/* <Icon type="camera" className="text-2x text-info" /> */}
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}
                                hoverable={true}
                            >
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        {/* <Icon type="mail" className="text-2x text-success" /> */}
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        {/* <Icon type="camera" className="text-2x text-info" /> */}
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        {/* <Icon type="mail" className="text-2x text-success" /> */}
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[10, 10]}>
                    <Col span={6}>
                        <div className="pb-m">
                            <h3>任务</h3>
                            <small>10个已经完成，2个待完成，1个正在进行中</small>
                        </div>
                        <Card>
                            <div></div>
                            <span></span>
                            <Timeline>
                                <TimelineItem color='green'>antd框架使用</TimelineItem>
                                <TimelineItem>路由配置</TimelineItem>
                                <TimelineItem color="red">Less配置浪费了很多时间</TimelineItem>
                                <TimelineItem>
                                    <p>Header布局</p>
                                    <p>Sider布局</p>
                                    <p>Content布局</p>
                                </TimelineItem>
                                <TimelineItem>构建项目</TimelineItem>
                            </Timeline>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <List
                            header={<div>消息栏</div>}
                            bordered
                            dataSource={this.listData()}
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 1,
                            }}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                        // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={10}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                {/* <span className="card-tool"><Icon type="sync" /></span> */}
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}