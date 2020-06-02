import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'; 
import Main from './components/Main';
import Single from './components/Single';
import './style.css';

const Root = function () {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={ Main } />
        <Route path='/search/:searchTerm' component={ Main }/>
        <Route path='/beer/:beerId/:beerSlug' component={ Single } />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));