import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
import './BasicLayout.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    PlusOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <div className="logo" />
                    <Menu theme="dark" defaultOpenKeys={['1']} mode='inline'>
                        <Menu.Item key="0">
                            <span> 菜单 </span>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span> 首页 </span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>用户管理 </span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>User</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header>header</Header>
                    <Content>main content</Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
