/*
 * @Author: your name
 * @Date: 2020-04-22 13:06:19
 * @LastEditTime: 2020-04-26 10:28:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings
 * @FilePath: /react-project/src/redux/configureStore.ts
 */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './modules';

const sagaMiddleward = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleward, logger);

const store: any =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, middleware)
        : (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
              rootReducer,
              compose(
                  middleware,
                  (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
              ),
          )
        : createStore(rootReducer, middleware);

export default store;
