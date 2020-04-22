/*
 * @Author: your name
 * @Date: 2020-04-20 10:56:00
 * @LastEditTime: 2020-04-22 10:56:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-project/src/redux/modules/index.ts
 */
import { combineReducers } from 'redux';
import dashboard from './dashboard';

export default combineReducers({
    dashboard,
});
