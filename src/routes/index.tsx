import React from 'react';
// 生成路由所需
import { Switch, Route, Redirect } from 'react-router-dom';
import queryString from 'query-string';
// 具体的组件列表
import AllComponents from '../components';
// 路由配置文件，根据配置文件，创建路由
import routesConfig, { IFMenu, IFMenuBase } from './config'

interface IRoutesIndexProps { }

interface IRoutesIndexState { }

export default class RoutesIndex extends React.Component<IRoutesIndexProps, IRoutesIndexState> {
    // 迭代菜单
    iterteMenu = (r: IFMenu) => {
        // 将query传给路由
        const mergeQueryToProps = (props: any) => {
            const queryReg = /\?\S*/g;
            // 匹配query & 获取出来
            const matchQuery = (reg: RegExp) => {
                const queryParams = window.location.hash.match(reg);
                return queryParams ? queryParams[0] : '{}';
            };
            // 删除路由中的query
            const removeQueryInRouter = (props: any, reg: RegExp) => {
                const { params } = props.match;
                Object.keys(params).forEach((key) => {
                    params[key] = params[key] && params[key].replace(reg, '');
                });
                props.match.params = { ...params };
            };

            props = removeQueryInRouter(props, queryReg);
            
            const merge = {
                ...props,
                query: queryString.parse(matchQuery(queryReg)),
            };
            return merge;
        };


        const route = (r: IFMenuBase) => {
            // 配置文件中的 component 与 AllComponents 中的名字 对应的上 ---》路由
            const Component = r.component && AllComponents[r.component];
            return (
                <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    render={(props: any) => {
                        console.log('----', props)
                        // 重新包装组件
                        const wrappedComponent = (
                            // <DocumentTitle title={r.title}>
                            <Component {...mergeQueryToProps(props)} />
                            // </DocumentTitle>
                        );
                        return wrappedComponent;
                        // return r.login
                        //     ? wrappedComponent
                        //     : this.requireLogin(wrappedComponent, r.requireAuth);
                    }}
                />
            );
        };

        const subRoute = (r: IFMenu): any =>
            r.subs && r.subs.map((subR: IFMenu) => (subR.subs ? subRoute(subR) : route(subR)));

        return r.component ? route(r) : subRoute(r);
    };

    // 创建路由
    createRoute = (key: string) => {
        return routesConfig[key].map(this.iterteMenu);
    };


    render() {
        // const { smenus } = this.props;
        return (
            <Switch>
                {/* 初始化所有的路由 & 精准匹配 */}
                {Object.keys(routesConfig).map((key) => this.createRoute(key))}
                
                {/* {(smenus.data || umbrella.getLocalStorage('smenus') || []).map(this.iterteMenu)} */}
                
                {/* 凡是匹配不到的转为404 */}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }

}


