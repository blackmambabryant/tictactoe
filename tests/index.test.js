// Importing necessary libraries and modules
const { Board } = require('../src/Board');
const jest = require('jest');

// Unit test for the recursive renderSquare function
test('renderSquare function should render squares recursively', () => {
  const board = new Board();
  const squares = Array(9).fill(null);
  const onClick = jest.fn();
  board.props = { squares, onClick };
  board.renderSquare(8);
  expect(onClick).toHaveBeenCalledTimes(9);
});