import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }

  render() {
    const boardSize = 3;
    let squares = [];

    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare(i * boardSize + j));
      }
      squares.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }

    return <div>{squares}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      listIsAscending: true,
    };
  }

  // Analyze the handleClick function
  handleClick(i) {
    // Identify base case
    // Identify recursive case
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  reverseOrder() {
    this.setState({
      listIsAscending: !this.state.listIsAscending,
    });
  }

  // Analyze the render function
  render() {
    // Identify base case
    // Identify recursive case
  }
}

// Analyze the calculateWinner function
function calculateWinner(squares) {
  // Identify base case
  // Identify recursive case
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));