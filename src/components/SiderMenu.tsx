import React from 'react'
import { MenuProps } from 'antd/lib/menu';
import { Menu } from 'antd'
import { IFMenu } from '../routes/config';
import { HashRouter as Router, Link } from 'react-router-dom';


const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

type SiderMenuProps = MenuProps & {
    menus: any;
    onClick?: (e: any) => void;
    // selectedKeys?: string[];
    // openKeys?: string[];
    // onOpenChange?: (v: string[]) => void;
};

// 渲染子菜单
// item.route 菜单单独跳转的路由
const renderMenuItem = (item: IFMenu) => {
    return (
        <MenuItem key={item.key}>
            <Link to={(item.route || item.key) + (item.query || '')}>
                <span className="nav-text">{item.title}</span>
            </Link>
        </MenuItem>
    )
}
// 渲染具体的item
const renderSubMenu = (item: IFMenu) => {
    return (
        <SubMenu
            key={item.key}
            title={
                <span>
                    {item.title}
                </span>
            }
        >
            {/* { IFMenu中包含subs，加！强制取，取不到就返回undefined }  */}
            {item.subs!.map((sub) => (sub.subs ? renderSubMenu(sub) : renderMenuItem(sub)))}
        </SubMenu>
    )
}

const SiderMenu = ({ menus, ...props }: SiderMenuProps) => {
    return (
        <div>
            <Router>
                {menus.map((item: IFMenu, index: number) => (
                    <Menu {...props}>
                        {item.subs!
                            ? renderSubMenu(item)
                            : renderMenuItem(item)}
                    </Menu>

                ))}
            </Router>
        </div>
    )
}

/**
 *
 *
 * @param {*} prevProps 组件将会接收的下一个参数props
 * @param {*} nextProps 组件的下一个状态state 
 * @returns
 */
function areEqual(prevProps: any, nextProps: any) {
    // if (prevProps.seconds === nextProps.seconds) {
    //     return true;
    // } else {
    //     return false;
    // }
    return true
}

// 第一个参数为纯函数的组件，
// 第二个参数用于对比props控制是否刷新，
//      与shouldComponentUpdate()功能类似。

export default React.memo(SiderMenu);