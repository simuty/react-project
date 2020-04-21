import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Layout, Popover, Badge, Menu } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom';


import {
    NotificationOutlined, UserOutlined, LogoutOutlined,
    InfoOutlined, BarsOutlined,
    MenuFoldOutlined, MenuUnfoldOutlined
} from '@ant-design/icons'

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// Component
type IHeaderCustomProps = RouteComponentProps<any> & {
    toggle: () => void;
    collapsed: boolean;
    user?: any;
    responsive?: any;
    path?: string;
};
type IHeaderCustomState = {
    user: any;
    visible: boolean;
};
class HeaderCustom extends React.Component<IHeaderCustomProps, IHeaderCustomState> {
    state = {
        user: '',
        visible: false,
    };

    handleVisibleChange = (visible: boolean) => {
        this.setState({ visible });
    }

    logout = () => {
        this.props.history.push('/404');
    }

    public render() {
        const { responsive = { data: {} } } = this.props;

        return (
            <Layout>
                <Header className="header">
                    {/* 
                    // 弹出框
                    <Popover
                        style={{ width: 500 }}
                        content={hoverContent}
                        title="说明"
                        trigger="click"
                        visible={this.state.visible}
                        autoAdjustOverflow={true}
                        placement={"bottom"}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        
                    </Popover> */}
                    {/* {折叠按钮} */}
                    <MenuFoldOutlined onClick={this.props.toggle} className='header__trigger'/> :

                    {/* {this.props.collapsed ?
                        <MenuFoldOutlined onClick={this.props.toggle} /> :
                        <MenuUnfoldOutlined onClick={this.props.toggle} />
                    } */}

                    <Menu
                        // 水平-右对齐-64
                        mode="horizontal"
                        style={{ lineHeight: '64px', float: 'right' }}
                    // onClick={this.menuClick}
                    >
                        {/* { 通知} */}
                        <Menu.Item key="1">
                            <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
                                <NotificationOutlined />
                            </Badge>
                        </Menu.Item>

                        {/* { 用户信息 } */}
                        <SubMenu
                            title={
                                <span className="avatar">
                                    <UserOutlined />
                                    <i className="on bottom b-white" />
                                </span>
                            }
                        >
                            <MenuItemGroup title="用户中心">
                                {/* <Menu.Item key="setting:1">你好 - {this.props.user.userName}</Menu.Item> */}
                                <Menu.Item> 你好 - XXX </Menu.Item>
                                <Menu.Item key="logout">
                                    <span onClick={this.logout}>
                                        <LogoutOutlined /> 退出
                                    </span>
                                </Menu.Item>
                            </MenuItemGroup>

                            <MenuItemGroup title="设置中心">
                                <Menu.Item key="setting:3">个人设置</Menu.Item>
                                <Menu.Item key="setting:4">系统设置</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>
            </Layout>

        );
    }
}

// Container

// interface IHeaderCustomOwnProps { }

// const mapStateToProps = (state: any, ownProps: IHeaderCustomOwnProps): IHeaderCustomOwnProps => {
//     return {
//         // ...mapStateToProps
//     };
// };

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IHeaderCustomOwnProps): any => {
//     return {
//         // ...mapDispatchToProps
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(HeaderCustom);

export default withRouter(HeaderCustom);
