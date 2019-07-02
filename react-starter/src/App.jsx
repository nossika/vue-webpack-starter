import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Index';

export default class App extends React.Component {
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