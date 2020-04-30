/*
 * @Author: simuty
 * @Date: 2020-04-29 15:05:06
 * @LastEditTime: 2020-04-30 17:58:01
 * @LastEditors: Please set LastEditors
 * @Description: 
 *      1. redux-saga  https://chenyitian.gitbooks.io/redux-saga/content/
 *          1. 是一个用于管理 Redux 应用的 副作用【异步操作】的中间件；
 *          2. 将所有的异步操作逻辑收集在一个地方集中处理；
 *          3. //! sagas 只会在启动的时候被调用
 *          3. //! sagas可以被理解为后台运行的进程，监听action; 从而决定基于action进一步做什么！
 *          4. 任何任务都通过 yield Effects来完成， 【effect可以看作是redux-saga的任务单元】，saga为各项任务提供effect创建器。
 *      2. 逻辑存放在两个地方
 *          1. sagas: 专门处理副作用
 *          2. reducer: 生成新的state
 */


import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export default function* rootSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
