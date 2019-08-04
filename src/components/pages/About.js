import React, { Fragment } from "react";
import PropTypes from "prop-types";

const About = props => {
  return (
    <Fragment>
      <h1>About this app</h1>
      <p>App to search git hub users</p>
      <p>version 1.0.0</p>
    </Fragment>
  );
};

About.propTypes = {};

export default About;
