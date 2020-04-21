import React from 'react';
import { Layout, Menu } from 'antd';
import HearderCustom, { HeaderCustom } from "../../components/HeaderCustom"
import { Copyright } from '../../components/widget'

import SiderCustom from '../../components/SiderCustom'


import './BasicLayout.less'

import Icon, {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


export default class BasicLayout extends React.Component {

    state = {
        collapsed: false,
        title: '',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="app_layout">

                <SiderCustom></SiderCustom>

                <Layout>
                    <HeaderCustom
                        toggle={this.toggle}
                        collapsed={this.state.collapsed}
                        user={{}}
                    ></HeaderCustom>

                    <Content className="app_layout_content">
                        {this.props.children}
                    </Content>

                    <Footer className='app_layout_foot'>
                        <Copyright />
                    </Footer>
                </Layout>

            </Layout >

        )
    }
}


// export default class BasicLayout extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <Layout style={{ minHeight: '100vh' }}>
//                     <Sider>
//                         <div className="logo" />
//                         <Menu theme="dark" mode='inline'>
//                             <Menu.Item key="0">
//                                 <span> 菜单 </span>
//                             </Menu.Item>

//                             <Menu.Item key="1">
//                                 <UserOutlined />
//                                 <Link to="/home"></Link>
//                                 <span> 首页 </span>
//                             </Menu.Item>

//                             <Menu.Item key="2">
//                                 <VideoCameraOutlined />
//                                 <Link to="/login"></Link>
//                                 <span>用户管理 </span>
//                             </Menu.Item>
//                             <SubMenu
//                                 key="sub1"
//                                 title={
//                                     <span>
//                                         <UserOutlined />
//                                         <span>User</span>
//                                     </span>
//                                 }
//                             >
//                                 <Menu.Item key="3">Tom</Menu.Item>
//                                 <Menu.Item key="4">Bill</Menu.Item>
//                                 <Menu.Item key="5">Alex</Menu.Item>
//                             </SubMenu>
//                         </Menu>
//                     </Sider>
//                     <Layout>
//                         <Header>header</Header>
//                         <Content>
//                             <Route path="/home" component={Home} />
//                             <Route path="/login" component={Login} />
//                         </Content>
//                         <Footer style={{ textAlign: 'center' }}>
//                             Ant Design ©2018 Created by Ant UED
//                         </Footer>
//                     </Layout>
//                 </Layout>
//             </Router>
//         );
//     }
// }
