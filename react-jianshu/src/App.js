import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common';


class App extends ImmutableComponent {
  // 最外层数据 依然是个原生js对象
  state = {
    title: fromJS([1, 4, 5])
  }

  // shouldComponentUpdate(nextProps, nextState) {


  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: '123456'
      })
    }, 3000)
  } 

  render() { 
    console.log('app render');
    return (
      <div>
        123456 
        <Header title={this.state.title} />
      </div>
    )
  }
}


export default App;
