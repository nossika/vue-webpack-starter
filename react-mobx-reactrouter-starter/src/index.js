import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider {...store}>
    <Router>
    <App/>
    </Router>
  </Provider>
  ,
  document.querySelector('#app')
);
