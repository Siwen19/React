import React, { useCallback } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Journey from './components/journey/Journey';
import { useMemo } from 'react';
import { exchangeFromTo } from './store/actions'
function App(props) {
  const {
    from,
    to,
    dispatch
  } = props
  const onBack = useCallback(() => {
    window.history.back();
  }, []);
  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo
    }, dispatch);
  }, []);
  console.log('渲染页面')
  return ( 
    <div className='App'>
      <div className='header-wrapper'>
        <Header title='火车票' onBack={onBack} />
      </div>
      <form action='./query.html' className='form'>
        <Journey from={from} to={to} {...cbs} />
      </form>
    </div>
  )
}

// export default App
export default connect(function mapStateToProps(state) {
  console.log(state);
  return state;
}, function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    dispatch
  };
})(App);
