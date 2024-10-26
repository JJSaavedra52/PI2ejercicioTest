/* 
Project Contributors
- Jhuly Andrea Vivas
- Santiago Campiño Tamayo
- Juan José Saavedra
- Brayan Maca Macancela
- Jhojan Stiven Espinosa
*/

const { whoWon } = require('./ejercicio');

test('Player 1 wins with rock against scissors', () => {
  expect(whoWon('rock', 'scissors')).toBe('Player 1 wins!');
});

test('Player 1 wins with paper against rock', () => {
  expect(whoWon('paper', 'rock')).toBe('Player 1 wins!');
});

test('Player 1 wins with scissors against paper', () => {
  expect(whoWon('scissors', 'paper')).toBe('Player 1 wins!');
});

test('Player 2 wins with rock against scissors', () => {
  expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
});

test('Player 2 wins with paper against rock', () => {
  expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
});

test('Player 2 wins with scissors against paper', () => {
  expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
});

test('It is a tie when both players choose rock', () => {
  expect(whoWon('rock', 'rock')).toBe('TIE!');
});

test('It is a tie when both players choose paper', () => {
  expect(whoWon('paper', 'paper')).toBe('TIE!');
});

test('It is a tie when both players choose scissors', () => {
  expect(whoWon('scissors', 'scissors')).toBe('TIE!');
});