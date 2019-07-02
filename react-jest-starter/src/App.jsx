import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Index';
import { HashRouter as Router } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
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
      </Router>
    )
  }
}