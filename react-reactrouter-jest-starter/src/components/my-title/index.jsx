import React from 'react';

export default class MyTitle extends React.Component {
  render() {
    return (
      <h1>
        { this.props.children }
      </h1>
    );
  }
}