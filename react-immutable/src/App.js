import React from 'react';
// lodash 集合
// Map 转换的时候 只会对最外层的结构转换
import { Map, fromJS } from 'immutable';
import logo from './logo.svg';
import './App.css';
 
class App extends React.Component {
  state = {
    loginInfo: {
      userName: null
    },
    posts: [{ content: 1}],
    userInfo: fromJS({
      name: 'lihua',
      skills: {
        excellent: ['react'],
        practice: ['node']
      },
      age: 123
    })
  }
  componentDidMount() {
    setTimeout(() => {
      // const { posts } = this.state;
      const posts = this.state.posts.slice(0);  //不在原来的基础上改变
      const newUserInfo = this.state.userInfo.set('name', 'lilei');
      posts.push({ content: 2} );
      const loginInfo = {
        ...this.state.loginInfo,
        userName: '小李'
      }

      let userInfo2 = {
        name: '',
        skill: {
          excellent: 'js',
          practice: {
            a: 1
          }
        },
        age: ''
      }
      // userInfo2.skill &&  (userInfo2.skill.excellent = 'react');
      let excellentSkills = this.state.userInfo.getIn(['skills', 'excellent']);
      // push 不是对原来的数据进行更新
      let newexcellentSkills = excellentSkills.push('js');
      const userInfo1 = this.state.userInfo.setIn(['skills', 'excellent'], 
      newexcellentSkills);  
      console.log(this.state.userInfo
        .getIn(['skills', 'practice']) === userInfo1.getIn(['skills', 'practice']))
      this.setState({
        posts,
        loginInfo,
        userInfo: userInfo1
      })
    }, 3000);
  }
  render() {
    const { posts, userInfo } = this.state;
    const skill = userInfo.getIn(['skills', 'excellent']);
    return (
      <div>
        { posts.length }
        name: { userInfo.get('name') }
        {
          skill.map((s, i) => {
            return (
              <li>
                { s }
              </li>
            )
          })
        }
      </div>
    )
  }
}

export default App;
