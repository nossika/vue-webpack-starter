import React from 'react';
import './style.less';

export default class Title extends React.Component {
  render() {
    return (
      <div className="my-title">{this.props.children}</div>
    );
  }
}