import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import About from '../components/About/About';

class AboutPage extends Component {
  render() {
    return (
      <Grid className="index-container" padded>
        <Grid.Row>
          <Grid.Column>
            <Helmet title={config.siteTitle} />
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <About />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Footer config={config} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AboutPage;
