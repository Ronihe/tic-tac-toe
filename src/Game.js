import React, { Component } from 'react';
import Board from './Board';
import { createSecureContext } from 'tls';

class Game extends Component {
  constructor(props) {
    super(props);
    this.size = this.props.size;
    this.state = {
      board: Array(this.size).fill(Array(this.size).fill(null)),
      player: true
      //if the player is not true, it is computer's turn
    };
  }

  onClick = (row, column) => {
    this.state.board[row][column] &&
      this.setState(currSt => {
        let SquareVal = currSt.player ? 'X' : 'O';
        currSt.board[row][column] = SquareVal;
        return {
          board: currSt,
          player: !currSt.player
        };
      }, this.checkWinner());
  };

  checkWinner() {
    // check rows
    if (
      this.state.board.some(row => {
        return row.every(column => column === 'X' || column === 'O');
      })
    ) {
      alert(`game over, ${this.state.player} won`);
    }

    // check column
    for (let col = 0; col < this.size; col++) {
      for (let row = 0; row < this.size; row++) {
        if (this.state.board[row][col] === 'X') {
          alert(`game over, ${this.state.player} won`);
        }
      }
    }
    for (let col = 0; col < this.size; col++) {
      for (let row = 0; row < this.size; row++) {
        if (this.state.board[row][col] === 'O') {
          alert(`game over, ${this.state.player} won`);
        }
      }
    }

    //check diag
    for (let col = 0; col < this.size; col++) {
      for (let row = 0; row < this.size; row++) {
        if (row === col && this.state.board[row][col] === 'X') {
          alert(`game over, ${this.state.player} won`);
        }
      }
    }

    for (let col = 0; col < this.size; col++) {
      for (let row = 0; row < this.size; row++) {
        if (row === col && this.state.board[row][col] === 'O') {
          alert(`game over, ${this.state.player} won`);
        }
      }
    }

    //check anti diag (thanks rampion)
    for (let col = 0; col < this.size; col++) {
      for (let row = 0; row < this.size; row++) {
        if (row + col === this.size - 1 && this.state.board[row][col] === 'X') {
          alert(`game over, ${this.state.player} won`);
        }
      }
    }

    for (let col = 0; col < this.size; col++) {
      for (let row = 0; row < this.size; row++) {
        if (row + col === this.size - 1 && this.state.board[row][col] === 'O') {
          alert(`game over, ${this.state.player} won`);
        }
      }
    }
  }

  render() {
    return (
      <div className="Game">
        <Board board={this.state.board} onClick={this.onClick} />
      </div>
    );
  }
}

Game.defaultProps = {};

Game.propTypes = {};

export default Game;
