import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render(){
    return <div>
      <h3>Footer</h3>
      <Link to="/info">Основная информация</Link>
    </div>;
  }
}
