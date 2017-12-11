import React, { Component } from 'react';
import Link from 'gatsby-link';
import './Logo.css';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link  to="/">NB</Link>
      </div>
    );
  }
}
