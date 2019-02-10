import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return <div className="Board" />;
  }
}

Board.defaultProps = {};

Board.propTypes = {};

export default Board;
