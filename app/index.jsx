import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './components/Notes';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div>
    Hello world
    <Notes />
  </div>,
  document.getElementById('app')
);
