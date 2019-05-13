import React from 'react';
import './style.less';

export default class Title extends React.Component {
  render() {
    return (
      <h1 className="my-title">{this.props.children}</h1>
    );
  }
}