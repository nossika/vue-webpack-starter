import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Index';
import api from 'api';


export default class App extends React.Component {
  state = {
    username: '',
  }
  componentDidMount() {
    api.getUserInfo({}).then(data => {
      this.setState({
        username: data.name,
      });
    });
  }
  render() {
    return (
      <section>
        <section>
          hi, { this.state.username }
        </section>
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