import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Index';
import { Button } from 'antd';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <section>
          <Link to={'/home'}>
            <Button>home</Button>
          </Link>
          <br/>
          <Link to={'/list'}>
            <Button>list</Button>
          </Link>
        </section>
        <section>
          <Routes/>
        </section>
      </section>
    )
  }
}