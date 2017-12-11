import { Grid } from 'semantic-ui-react';
import React from 'react';
import Helmet from 'react-helmet';
// import PostListing from "../components/PostListing/PostListing";
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import UserLinks from '../components/UserLinks/UserLinks';

class Contact extends React.Component {
  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Grid className="index-container" padded>
        <Grid.Row>
          <Grid.Column>
            <Helmet title={config.siteTitle} />
            <SEO />
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <UserLinks config={config} />
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

export default Contact;
