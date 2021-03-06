import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


export class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="">Something</Link>
          </li>
          <li>
            <Link to="">Somethin else</Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
