// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

const { createStore, combineReducers } = require('redux');
let isLogin = false;
let posts = [];
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
// 状态 reducer(纯函数)
function loginReducer(state = isLogin, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      // state 上一次的状态
      // state = !state ×
      return !state;          // 返回 新的state，不是修改原来的那个变量
    default:
      return state;
  }
}
function postsReducer(state = posts, action) {
  switch (action.type) {
    case POSTS_STATUS:
      return action.newPosts;
    default:
      return state;
  }
}
// action: 纯对象({}), type 字段: 区分这个action干啥的，常量，整个应用唯一
const loginAction = {
  type: LOGIN_STATUS,
  a: 1
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a: 1 }, { a: 2 }]
}
// combineReducers把所有模块集合在一起
const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer
})
// 状态存到 store
// createStore 需要返回值，也调用了loginReducer, postsReducer
const store = createStore(rootReducer);
// mapStateToProps = store.getState
console.log(store);
console.log('now', store.getState());
// action -> reducer

// mapDispatchToprops
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// 去到 loginReducer 、postsReducer

class App extends React.Component {
  handleLogin = () => {
    store.dispatch(loginAction)
  }
  render() {
    return (
      <div>
        isLogin: { store.getState().login ? '1' : '0'}
        posts: { store.getState().posts.length}
        <button onClick={this.handleLogin}>切换login</button>
      </div>
    )
  }
}
// 渲染
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
render();
// 订阅 store store 通知我回调
store.subscribe(() => {
  render();
});
