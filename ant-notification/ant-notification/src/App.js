import React from 'react';
import Notification from './Notification';
import logo from './logo.svg';
import App2 from './App2';
import './App.css';
import notification from './Notification';

function App() {
  return (
    <div className="App">
      {/* <App2 />
      <Notification> 
        Success
        <h2>Fail</h2>
      </Notification>  */}
      <button onClick={() => {
        notification.open({
          title: 'this is a title'
        });
      }}>open</button>
      <button onClick={() => {
        notification.close();
      }}>close</button>
    </div>
  );
}

export default App;
