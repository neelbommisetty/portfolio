import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Link from 'gatsby-link';
// import config from '../../../data/SiteConfig';
import Logo from '../Logo/Logo';
import './Header.css';

export default class Header extends Component {
  render() {
    return <header>
        <nav>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Logo />
            </Grid.Column>
            <Grid.Column width={4} />
            <Grid.Column width={8}>
              <ul className="nav-links">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <a href="https://medium.com/@neelbommisetty" rel="noopener noreferrer" target="_blank">
                    Blog
                  </a>
                </li>
                {/* <li>
                  <Link to="/uses">Uses</Link>
                </li> */}
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
              </ul>
            </Grid.Column>
          </Grid>
        </nav>
      </header>;
  }
}
