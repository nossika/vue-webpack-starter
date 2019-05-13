import React from 'react';
import { Link } from 'react-router-dom';
import api from 'api';
import Routes from './routes/Index';

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
          <Link to={'/list'}>list</Link>
        </section>
        <section>
          <Routes/>
        </section>
      </section>

    )
  }
}