import React from 'react';
import DragAble1, { WithDragAble2 } from './DragAble1';
import logo from './logo.svg';
import './App.css';
import { Drag1 } from './useDrag';
function App() {
  return (
    <div className="App">
       <DragAble1 />
       <WithDragAble2 />
       <Drag1 />
    </div>
  );
}

export default App;
