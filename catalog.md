[React+Redux工程目录结构，最佳实践](https://www.lovesofttech.com/react/reactReduxDirectoryStructure.html)

[github](https://github.com/xuchaobei/react-book/tree/master/chapter-09/bbs-redux-reselect)


## 目录结构


```js
components/  (应用级别的通用组件)
containers/  
  feature1/
    components/  (功能拆分出的专用组件)
    feature1.js  (容器组件)
    index.js     (feature1对外暴露的接口)
redux/
  index.js (combineReducers)
  module1.js (reducer, action types, actions creators)
  module2.js (reducer, action types, actions creators)
index.js
```


redux/module 

```js
export const types = {
  const LOAD   : 'widget/LOAD',
  const CREATE : 'widget/CREATE',
  const UPDATE : 'widget/UPDATE',
  const REMOVE : 'widget/REMOVE'
}

const initialState = {
  widget: null,
  isLoading: false,
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    types.LOAD: 
      //...
    types.CREATE:
      //...
    types.UPDATE:
      //...
    types.REMOVE:
      //...
    default: return state;
  }
}

// Action Creators
// 这样定义而不是每个action都export，目的是简化代码，import时不需要把所有action都列出来。
export const actions = {
  loadWidget: function() {
    return { type: types.LOAD };
  },
  createWidget: createWidget(widget) {
    return { type: types.CREATE, widget };
  },
  updateWidget: function(widget) {
    return { type: types.UPDATE, widget };
  },
  removeWidget: function(widget) {
    return { type: types.REMOVE, widget };
  }
}
```



```js
│  index.js
│
├─components # 全局通用组件
│  ├─Header
│  │      index.js
│  │      style.css
│  │
│  ├─Loading
│  │      index.js
│  │      style.css
│  │
│  └─ModalDialog
│          index.js
│          style.css
│
├─containers
│  ├─App
│  │      index.js
│  │
│  ├─Home
│  │      index.js
│  │
│  ├─Login
│  │      index.js
│  │      style.css
│  │
│  ├─Post
│  │  │  index.js # Post 容器组件
│  │  │  style.css
│  │  │
│  │  └─components # Post 专用组件
│  │      ├─CommentList
│  │      │      index.js
│  │      │      style.css
│  │      │
│  │      ├─CommentsView
│  │      │      index.js
│  │      │      style.css
│  │      │
│  │      ├─PostEditor
│  │      │      index.js
│  │      │      style.css
│  │      │
│  │      └─PostView
│  │              index.js
│  │              style.css
│  │
│  └─PostList
│      │  index.js # PostList 容器组件
│      │  style.css
│      │
│      └─components # PostList 专用组件
│          ├─PostItem
│          │      index.js
│          │      style.css
│          │
│          └─PostsView
│                  index.js
│
├─images
│      like-default.png
│      like.png
│
├─redux
│  │  configureStore.js
│  │
│  └─modules
│          app.js
│          auth.js
│          comments.js
│          index.js
│          posts.js
│          ui.js
│          users.js
│
└─utils
        AsyncComponent.js
        connectRoute.js
        date.js
        request.js
        SHA1.js
        url.js
```