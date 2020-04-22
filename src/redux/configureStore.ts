import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './modules';

const middleware = applyMiddleware(thunk, logger)
const store: any =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, middleware)
        : (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
              rootReducer,
              compose(middleware, (window as any).__REDUX_DEVTOOLS_EXTENSION__())
          )
        : createStore(rootReducer, middleware)

export default store;
