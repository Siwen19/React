import React from 'react';
import axios from 'axios'; 
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [{ content: '全部', params: 'all' },
      { content: '招聘', params: 'job' },
      { content: '精华', params: 'good' },
      { content: '分享', params: 'share' },
      { content: '问答', params: 'ask' },],
      tab: 'all',
      isLoading: true,
      lists: [] //文章列表
    }
  }
  // handleGetPost 改变 tab, 改变 lists
  handleGetPost = () => {
    const { tab } = this.state;
    axios({
      url: "https://cnodejs.org/api/v1/topics",
      params: {
        tab: tab,
        page: 1,
        limit: 40
      }
    })
      .then(res => {
        console.log(res.data);
        return res;
      })
      .then(res => {
        this.setState({
          lists: res.data.data,
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false
        })
      })
  }
  // 生命周期
  // App 被 ReactDom 渲染(生命周期)到pc上
  componentDidMount() {
    this.handleGetPost();
  } 
  paintColor = (event) => { 
    this.setState({
      tab: event.target.getAttribute('data-tab')
    }, () => {
      this.handleGetPost();
    })
  }
  render() {
    const { lists, tabs, tab, isLoading } = this.state; 
    return (<div>
      {
        isLoading && '正在加载中...'
      }
      {
        lists.length === 0 && '暂无文章请重试'
      } 
      {
        tabs.map((tabObj, i) => {
          return (<div key = {i} data-tab = {tabObj.params} className = {tabObj.params === tab ? 'keyword' : ''}  onClick = {this.paintColor}>
            {tabObj.content} 
          </div>)
        })
      }
      {
        // map 返回 数组, react 如果jsx(html + js) 存在数组， react自己展开数组里面的每一项
        lists.map((list, i) => {
          return (
            <div key = {i}>
              {list.title} 
            </div>
          )
        })
      }
    </div>);
  }
}
// 默认导出
export default App;
// 命名导出
export const name = 'lilei';
