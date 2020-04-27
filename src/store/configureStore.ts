/*
 * @Author: simuty
 * @Date: 2020-04-27 13:35:35
 * @LastEditTime: 2020-04-27 14:38:17
 * @LastEditors: Please set LastEditors
 * @Description:
 *
 *      1. 配置state相关中间件【开发环境】
 *
 */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
// 
import rootSaga from '../sagas';

// 配置redux日志
const logger = createLogger({
    // 耗时
    duration: true,
    // 折叠
    collapsed: true,
    // titleFormatter: defaultTitleFormatter,
});

const sagaMiddleware = createSagaMiddleware();
// 中间件数组
const middlewareList: any = [sagaMiddleware, logger];

export default function configureStore() {
    const store: any =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, middlewareList)
        : (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
              rootReducer,
              compose(middlewareList, (window as any).__REDUX_DEVTOOLS_EXTENSION__())
          )
        : createStore(rootReducer, middlewareList)

    sagaMiddleware.run(rootSaga);
    // store.close = () => store.dispatch(END);
    return store;
}
