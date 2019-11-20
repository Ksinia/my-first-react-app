import React, { Component } from "react";
import PropTypes from "prop-types"; //define which data the element expects
// and which type (for example string or number) these data should be.

export default class Title extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  render() {
    return <h1>{this.props.content}</h1>;
  }
}
