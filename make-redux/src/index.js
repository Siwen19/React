// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red',
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }

// function stateChanger(state, action) {
//   if (!state) {
//     return {
//       title: {
//         text: 'React.js 小书',
//         color: 'red',
//       },
//       content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//       }
//     }
//   } 
// switch (action.type) {
//   case 'UPDATE_TITLE_TEXT':
//     return {  // 构建新的对象并且返回
//       ...state,
//       title: {
//         ...state.title,
//         text: action.text
//       }
//     }
//   case 'UPDATE_TITLE_COLOR':
//     return {  // 构建新的对象并且返回
//       ...state,
//       ...state,
//       title: {
//         ...state.title,
//         color: action.color
//       }
//     }
//   default:
//     return state  //没有修改，返回原来的对象
// }
// }

// function createStore(reducer) {
//   let state = null;
//   const listeners = [];
//   const subscribe = (listener) => listeners.push(listener);
//   const getState = () => state;
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach((listener) => listener());
//   }
//   dispatch({});
//   return { getState, dispatch, subscribe }
// }

// function renderApp(newAppState, oldAppState = {}) {
//   if (newAppState === oldAppState) return;
//   console.log('render app...');
//   renderTitle(newAppState.title, oldAppState.title);
//   renderContent(newAppState.content, oldAppState.content);
// }

// function renderTitle(newTitle, oldTitle = {}) {
//   if (newTitle === oldTitle) return;
//   console.log('render title...');
//   const titleDOM = document.getElementById('title');
//   titleDOM.innerHTML = newTitle.text;
//   titleDOM.style.color = newTitle.color;
// }

// function renderContent(newContent, oldContent = {}) {
//   if (newContent === oldContent) return;
//   console.log('render content...');
//   const contentDOM = document.getElementById('content');
//   contentDOM.innerHTML = newContent.text;
//   contentDOM.style.color = newContent.color;
// }

// renderApp(appState);  //首次渲染页面
// dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'});
// dispatch({type: 'UPDATE_TITLE_COLOR', color: 'green'});
// renderApp(appState);

// 传入一个初始状态值 和 一个组件
// const store = createStore(stateChanger);
// let oldState = store.getState();  //缓存旧的 state 
// store.subscribe(() => {
//   const newState = store.getState();
//   renderApp(newState, oldState);
//   oldState = newState;
// });

// // store.subscribe(() => renderApp(store.getState()));
// renderApp(store.getState());  //首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }); 


function userReducer(state, action) {
  if (!state) {
    return [];
  }
  switch (action.type) {
    case 'ADD_USER':
      let user = action.user.username + ' ' + action.user.age + ' ' +
        action.user.gender;
      return [...state, user];
    default:
      return state;
  }
}

function createStore(userReducer) {
  let state = null;
  let listeners = [];
  const getState = () => state;
  let subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = userReducer(state, action);
    listeners.forEach((listener) => listener());
  }
  dispatch({});
  return { getState, dispatch, subscribe };
}

function renderApp(appState) { 
  modifyUser(appState);
}

function modifyUser(user) {   
  if (!user.length) return;
  const usernameDOM = document.getElementById('title');
  const userinfoDOM = document.getElementById('content'); 
    usernameDOM.innerHTML += user.slice(-1)[0].split(' ')[0];
    userinfoDOM.innerHTML += user.slice(-1)[0].split(' ')[1] + ' ' + user.slice(-1)[0].split(' ')[2]; 
}

const store = createStore(userReducer);

store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());
store.dispatch({ type: 'ADD_USER', user: { username: 'Lucy', age: 18, gender: 'female' } })
store.dispatch({ type: 'ADD_USER', user: { username: 'Mike', age: 24, gender: 'male' } })