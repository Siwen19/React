import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;

class ArticleStore {
  // observable state 用 observable 修饰过的变量 变量被修改了 页面就会就会重新渲染
  // es @ 装饰器
  LIMIT = LIMIT
  //   react state 响应式 VM
  @observable articles = {
    all: [],
    tag1: [],
    tag2: []
  }
  @observable total = 0;
  // 繁杂的逻辑 尽量 写到 store
  // right tags
  @observable tags = [] // 不需要 reducer
  @observable isLoading = true;
  @observable activityKey = 'all';
  @observable pageCurrent = 1;

  @action
  getArticle(tag, offset = 0) {
    this.isLoading = true;
    axios.get('/articles', {
      params: {
        tag: this.activityKey === 'all' ? null : this.activityKey,
        offset: offset * LIMIT,
        limit: LIMIT
      }
    })
      .then(res => {
        this.isLoading = false;
        // 修改 store
        this.articles[tag] = res.articles
        this.total = res.articlesCount
      })
  }
  handleTabChange = (key) => {
    this.activityKey = key;
    // console.log(key);
    this.getArticle(key);
  }
  @action
  getTags() {
    axios.get('/tags').then(res => {
      // 修改 state
      console.log(res);
      this.tags = res.tags;
    })
  }
  handleAddTab = (tab) => {
    this.activityKey = tab;
    this.articles[tab] = [];
    this.pageCurrent = 1;
    this.getArticle(tab);
  }
  handlePageChange = (page) => {
    this.pageCurrent = page;
  }
}

export default new ArticleStore();
