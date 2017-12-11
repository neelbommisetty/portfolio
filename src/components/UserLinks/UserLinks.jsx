import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react';
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    // const { labeled } = this.props;
    return userLinks.map(link =>
      (<Button key={link.label} href={link.url} color={link.color ? link.color : link.name} target="_blank">
        <Icon name={link.name} /> {link.label}
      </Button>)
    );
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        {this.getLinkElements()}
      </div>
    );
  }
}

export default UserLinks;
