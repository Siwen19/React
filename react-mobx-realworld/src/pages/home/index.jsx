import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Pagination, Tabs, Row, Col, Tag } from 'antd';
import { T } from 'antd/lib/upload/utils';
const { TabPane } = Tabs;

// 想要哪个页面的数据 注入谁
@inject('articleStore')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.articleStore.getArticle('all');
    this.props.articleStore.getTags();
  }
  handlePaginationChange = (page) => {
    // 1 offset 0
    // 2 offset 1
    // 3 offset 2
    this.props.articleStore.getArticle('all', page - 1);
  }
  render() {
    const { total, LIMIT, articles, handleTabChange, tags } = this.props.articleStore
    console.log(total, LIMIT)
    return (
      <div>
        <Row>
          <Col span={19}>
            <Tabs defaultActiveKey={'all'} onChange={handleTabChange}>
              {Object.keys(articles).map((tag, i) => {
                return (
                  <TabPane key={tag} tab={tag}>
                    {
                      articles[tag].map((article, i) => {
                        return (
                          <div key={i}>
                            <h3>
                              {article.title}
                            </h3>
                            <p>
                              {article.body}
                            </p>
                          </div>
                        )
                      })
                    }
                  </TabPane>
                )
              })}
              {/* {this.props.articleStore.articles.all.length} */}
            </Tabs>
            <Pagination
              onChange={this.handlePaginationChange}
              total={total}
              pageSize={LIMIT} />
          </Col>
          <Col span={5}>
            {tags.map((tag, i) => {
              return <Tag key={i}>{tag}</Tag>
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;