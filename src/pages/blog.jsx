import { Grid } from 'semantic-ui-react';
import React from 'react';
import Helmet from 'react-helmet';
import PostListing from "../components/PostListing/PostListing";
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return(
      <Grid className="index-container" padded>
        <Grid.Row>
          <Grid.Column>
            <Helmet title={config.siteTitle} />
            <SEO postEdges={postEdges} />
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <PostListing postEdges={postEdges} />
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

export default Blog;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
