import React from 'react';
import { Provider } from 'mobx-react';
import store from './store';
import Home from 'pages/Home';

export default class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <section>
          <h1>react-mobx</h1>
          <Home/>
        </section>
      </Provider>
    )
  }
}