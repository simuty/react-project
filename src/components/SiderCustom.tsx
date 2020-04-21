import * as React from 'react';

import { Menu, Layout } from 'antd'
import SiderMenu from './SiderMenu';
import menus from './../routes/config'
const { Sider } = Layout;

const MenuItem = Menu.Item;

// Component

interface ISiderCustomStateProps {
    popoverHide?: () => void;
    collapsed?: boolean;
    smenus?: any;
}

interface ISiderCustomDispatchProps { }

interface ISiderCustomProps extends ISiderCustomStateProps, ISiderCustomDispatchProps { }

interface ISiderCustomState {
    collapsed?: boolean | undefined;
    openKeys: string[];
    firstHide: boolean | undefined;
    selectedKey: string;
    mode: string;
}

export class SiderCustom extends React.Component<ISiderCustomProps, ISiderCustomState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mode: 'inline',
            openKeys: [],
            selectedKey: '',
            firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        };
    }

    menuClick = (e: any) => {
        this.setState({
            selectedKey: e.key,
        });
        const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = (v: string[]) => {
        this.setState({
            openKeys: v,
            firstHide: false,
        });
    };


    public render() {
        const { collapsed } = this.props;
        return (
            <Sider
                className="sider-custom"
            >
                <div className="logo" />
                <SiderMenu
                    menus={menus.menus}
                    onClick={this.menuClick}
                    mode="inline"
                    // selectedKeys={['/app/dashboard/index']}
                    // openKeys={firstHide ? [] : openKeys}
                    onOpenChange={this.openMenu}
                />
                {/* <style>
                    {`
                    #nprogress .spinner{
                        left: ${collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style> */}
            </Sider>
        );
    }
}


export default SiderCustom