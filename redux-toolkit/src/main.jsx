// filepath: /src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

ReactDOM.render(

    <App />
  ,
  document.getElementById('root')
);