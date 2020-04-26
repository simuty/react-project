[toc]
### 愿景
之前将Node作为纯后端，目前将Node作为中间层，想要通过一个前端项目，对react全家桶有个整体认识，并且能够开发相应的前后端应用。

### 阶段目标

#### 第一阶段

1. 掌握数据流管理方案--redux及其配套设施；
2. 熟悉react、react-router-dom、react-router的应用场景以及注意事项；
3. 熟练使用antd的组件；
4. 完成前端应用

> 原生化
1. 尽可能的**只用**原生组件，目光始终在完成需求上；
2. 尽可能用不同的方式完成同样的需求；
3. 尽可能好的组织代码方式；

#### 第二阶段

1. Eggjs + Mysql 提供数据服务
2. 进一步完善前后端

### 参考项目

为了完成目标，会在开源的----[react-admin](https://github.com/karakal-FET/react-admin)的基础上**进行改写**并完成一个相对完善的全栈项目。

### 技术栈

大致分为以下几类，还会涉及其余的相关模块等，后续会在相关位置添加链接或单独写文章整理。

1. 语言：
   1. [TS](https://www.tslang.cn/docs/handbook/basic-types.html)、
   2. [Less](http://lesscss.cn/)
2. React：
   1. [React](https://react.docschina.org/docs/getting-started.html)
   2. [react-router](https://react-guide.github.io/react-router-cn/)
   3. [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
3. 状态管理：
   1. [Redux](https://www.redux.org.cn/)
   2. [React-Redux](https://cn.redux.js.org/docs/react-redux/)
   3. [Redux-Saga](https://redux-saga-in-chinese.js.org/)
   4. [Immer](https://github.com/immerjs/immer)
4. UI：
   1. [Antd](https://ant.design/docs/resources-cn)
   2. [echartsjs](https://www.echartsjs.com/zh/option.html#title)
   3. [echarts-for-react](https://github.com/hustcc/echarts-for-react)

### 疑问解答🤔️

采用官方脚手架--[create-react-app](https://www.html.cn/create-react-app/docs/getting-started/)；

> 为何不用[dvajs](https://dvajs.com/guide/)?

综合性很强，但我认为应该**先难后易**

> 为何不用[umi](https://umijs.org/zh-CN/docs/getting-started)?

综合性更强，仍旧认为应该**先难后易**

对比学习node，我觉得先了解express，再写koa，最后采用 egg 是个不错的选择。

> 建议不要eject!

初心是学习react全家桶，不是webpack【后期有空再学】, 至于less相关配置，可以[换个做法](https://ant.design/docs/react/use-in-typescript-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98)

---

### 文章列表

- [React实战系列-布局与组件【1】](https://simuty.com/2020/04/20React%E5%AE%9E%E6%88%98%E7%B3%BB%E5%88%97-%E5%B8%83%E5%B1%80%E4%B8%8E%E7%BB%84%E4%BB%B6/)
- 

### 下载

```bash
$ git clone https://github.com/simuty/react-project
$ npm i 
$ npm start
```

🗣记得切换对应的分支，根据文章匹配的分支🚩


