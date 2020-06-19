import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lang from './Lang';
import Add from './Add';



ReactDOM.render(
    <div>
      <App myname= "Faizan"/>
      <Lang one = 'Python' two = 'Rust' three = 'Java Script'/>
      <Add />
    </div>,

  document.getElementById('root')
);