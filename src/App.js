import React from 'react';
import './App.css';

const App = ({myname}) => {
  return <div className='hello'>
      Hello my name is <strong>{myname}</strong>!
    </div>;
}

export default App;
