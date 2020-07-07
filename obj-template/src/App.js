import React, { Component } from 'react';
import "./App.css";
import axios from 'axios';
import './mock/data.js';

class Post extends Component {
  state = {}
  render() {
    return (
      <div>
        Post
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    );
  }
}

class List extends Component {
  componentWillReceiveProps(props) {
    const { data } = props
    for (let i = 0; i < 5; i++) {
      let DOM = ` 
          <span class="name">${ data && data[i].name}</span>
          <span class="age">${ data && data[i].age}</span>
          <span class="address">${ data && data[i].address}</span>
          <span class="action">${ data && data[i].action}</span>  
      `;
      let temp = document.createElement('div');
      temp.className = 'row'
      temp.innerHTML = DOM;
      this.div.appendChild(temp);
    }
  }
  render() {
    return (
      <div id="wrapper" ref={(div) => this.div = div}>
        <div className="row">
          <span className="name" style={{ fontWeight: "bold" }}>Name</span>
          <span className="age" style={{ fontWeight: "bold" }}>Age</span>
          <span className="address" style={{ fontWeight: "bold" }}>Address</span>
          <span className="action" style={{ color: "black", border: "none", fontWeight: "bold" }}>Action</span>
        </div>
      </div>
    );
  }
};

const loadAndRefresh = (url) => (WrappedComponent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        msg: "",
        content: "",
        list: ""
      }
    }

    componentDidMount() {
      // 管住数据请求
      this._loadData();
    }

    async _loadData() {
      axios.get(url).then((res) => {
        this.setState({
          msg: res.data.title,
          content: res.data.content,
          list: res.data.list
        })
        console.log(this.state.list)
      }
      );
    }

    render() {
      // const props = {
      //   msg: this.state.msg,
      //   content: this.state.content,
      //   list: this.state.list
      // }
      return (
        <div>
          <WrappedComponent data={this.state.list} />
        </div>
      )
    }
  }
}

// 函数的返回值是组件
// /posts/ axios api url，Post 组件作为参数
const WrappedPost = loadAndRefresh('/posts/')(Post);
// 通用性的提供数据请求及更新的解决方案
// 复用
const WrappedComment = loadAndRefresh('/posts/')(Comment);

const WrappedList = loadAndRefresh('/posts/')(List);

function App() {
  return (
    <div className="App">
      <WrappedPost />
      <WrappedComment />
      <WrappedList />
    </div>
  )
}

export default App;