/*
 * @Author: simuty
 * @Date: 2020-04-27 16:19:50
 * @LastEditTime: 2020-04-29 15:35:54
 * @LastEditors: 
 * @Description: 
 */

export default function counter(state = 0, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
