import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const store =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, applyMiddleware(thunk))
        : (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
              rootReducer,
              compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__())
          )
        : createStore(rootReducer, applyMiddleware(thunk));

export default store;
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './modules';

// let finalCreateStore;
// // 如果程序运行在非生产模式下，且浏览器安装了调试插件，则创建包含调试插件的store
// if (
//     process.env.NODE_ENV !== 'production' &&
//     window.__REDUX_DEVTOOLS_EXTENSION__
// ) {
//     finalCreateStore = compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__(),
//     )(createStore);
// } else {
//     finalCreateStore = applyMiddleware(thunk)(createStore);
// }

// export default finalCreateStore;

// export default function configureStore(initialState) {
//     const store = finalCreateStore(rootReducer, initialState);

//     // 支持reducer的热加载
//     if (process.env.NODE_ENV !== 'production' && module.hot) {
//         module.hot.accept('./modules', () =>
//             store.replaceReducer(require('./modules')),
//         );
//     }

//     return store;
// }
