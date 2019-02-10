import React, { Component, PropTypes } from 'react';

class Square extends Component {
  render() {
    return <button>{this.props.value}</button>;
  }
}

Square.defaultProps = { value: null };

Square.propTypes = { value: PropTypes.string };

export default Square;
