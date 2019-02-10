import React, { PropTypes, Component } from 'react';
import Square from './Square';

class Board extends Component {
  render() {
    const board = this.props.board;
    return board.map(row => (
      <div>
        {row.map(col => (
          <Square value={col} onCick={this.props.onClick} />
        ))}
        )
      </div>
    ));
  }
}

Board.defaultProps = { board: [] };

Board.propTypes = {
  board: PropTypes.array
};

export default Board;
