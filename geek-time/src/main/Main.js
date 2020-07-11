import React, { Component } from 'react';
import '../App.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../data/data';
import axios from 'axios';
import Item from '../item/Item';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      allLessons: [],
      currentLessons: []
    }
  }
  componentDidMount() {
    axios.get('/posts/').then(res => {
      this.setState({
        allLessons: res.data.list,
        currentLessons: res.data.list
      })
    })
  }
  callback(key) {
    const { allLessons } = this.state;
    switch (key) {
      case '2': this.setState({ currentLessons: allLessons.slice(0, allLessons.length / 4) }); break;
      case '3': this.setState({ currentLessons: allLessons.slice(allLessons.length / 4, 2 * allLessons.length / 4) }); break;
      case '4': this.setState({ currentLessons: allLessons.slice(2 * allLessons.length / 4, 3 * allLessons.length / 4) }); break;
      case '5': this.setState({ currentLessons: allLessons.slice(3 * allLessons.length / 4, 4 * allLessons.length / 4) }); break;
      case '6': this.setState({ currentLessons: [] }); break;
      default: this.setState({ currentLessons: allLessons });
    }
  }
  handleSwitcher(key) {
    const { allLessons } = this.state;
    switch (key) {
      case '2': {
        const unLearnedLessons = allLessons.filter((ele) => (ele.learned / ele.lessons) !== 1);
        this.setState({ currentLessons: unLearnedLessons });
      }; break;
      case '3': {
        const learnedLessons = allLessons.filter((ele) => (ele.learned / ele.lessons) === 1);
        this.setState({ currentLessons: learnedLessons });
      }; break;
      default: this.setState({ currentLessons: allLessons });
    }
  }
  render() {
    const { currentLessons } = this.state;
    const item = currentLessons.map((ele, i) => <Item data={ele} key={i} />)
    const { TabPane } = Tabs;
    return (
      <div className='_2Kdh_KPR_0' style={{ minHeight: '582px' }}>
        <div className="_20flk3YV_0">
          <h2 className="CoP0R_f0_0">全部课程</h2>
          <Tabs onChange={this.handleSwitcher.bind(this)} defaultActiveKey="1" className="_25XbGwf9_0">
            <TabPane tab="全部" key="1" className="_2-OcGueQ_0 _2WFKwJCc_0"></TabPane>
            <TabPane tab="未学完" key="2" className="_2-OcGueQ_0 _2WFKwJCc_0"></TabPane>
            <TabPane tab="已学完" key="3" className="_2-OcGueQ_0 _2WFKwJCc_0"></TabPane>
          </Tabs>
          <Tabs onChange={this.callback.bind(this)} defaultActiveKey="1" type="card">
            <TabPane tab="所有形式" key="1" >
              {item}
            </TabPane>
            <TabPane tab="专栏" key="2">
              {item}
            </TabPane>
            <TabPane tab="视频课" key="3">
              {item}
            </TabPane>
            <TabPane tab="微课" key="4">
              {item}
            </TabPane>
            <TabPane tab="每日一课" key="5">
              {item}
            </TabPane>
            <TabPane tab="其他" key="6">
              {item}
            </TabPane>
          </Tabs>
          <div>
            <div ref={(div) => this.div = div} data-v-9d723e86 className='empty-wrap'>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Header;
