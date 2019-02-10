import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: undefined
    };
  }

  handleChange = evt => {
    this.setState({
      size: evt.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} />
        <Game size={this.state.size} />
      </div>
    );
  }
}

export default App;
