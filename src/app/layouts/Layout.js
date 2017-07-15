import React from 'react';

export default class Layout extends React.Component {
  render() {
    return <div>
            <h1>Go!</h1>
            <div>{this.props.children}</div>
          </div>;
  }
}
