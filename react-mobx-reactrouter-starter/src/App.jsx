import React from 'react';
import { Link } from 'react-router-dom';
import api from 'api';
import Routes from './routes/Index';
import './global.less';

export default class App extends React.Component {
  componentDidMount() {
    api.test().then(res => {
      console.log('api test: ', res);
    });
  }
  render() {
    return (
      <section>
       <section>
          <Link to={'/home'}>home</Link>
          <br/>
          <Link to={'/mobx-example'}>mobx-example</Link>
        </section>
        <section>
          <Routes/>
        </section>
      </section>

    )
  }
}