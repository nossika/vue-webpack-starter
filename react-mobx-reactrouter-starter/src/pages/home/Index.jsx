import React from 'react';
import MyTitle from 'components/my-title';
import './style.less';

export default class Home extends React.Component {
  render() {
    return (
      <section className="home-page">
        <MyTitle>home</MyTitle>
      </section>
    )
  }
}