import React,{ Component } from "react";
import { Grid } from 'semantic-ui-react';
import Link from 'gatsby-link';
// import config from '../../../data/SiteConfig';
import Logo from '../Logo/Logo';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Grid columns={2}>
            <Grid.Column>
              <Logo />
            </Grid.Column>
            <Grid.Column>
              <ul className="nav-links">
                <li>
                  <Link to="/about">About Me</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/uses">Uses</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
              </ul>
            </Grid.Column>
          </Grid>
        </nav>
      </header>
    );
  }
};
