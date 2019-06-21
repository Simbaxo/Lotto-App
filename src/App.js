import React from 'react';
import Ball from './Ball';
import Lotto from './Lotto'
import './App.css';

function App() {
  return (
    <div className="App">
     <Lotto />
     <Lotto title='Mini Daily' maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
