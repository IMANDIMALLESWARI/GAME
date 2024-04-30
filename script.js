let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

function handleResult() {
  if (checkWinner()) {
    document.getElementById('message').textContent = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (checkDraw()) {
    document.getElementById('message').textContent = 'It\'s a draw!';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('message').textContent = `It's ${currentPlayer}'s turn`;
  }
}

function makeMove(cellIndex) {
  if (gameBoard[cellIndex] === '' && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementById('gameBoard').children[cellIndex].textContent = currentPlayer;
    handleResult();
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').textContent = `It's ${currentPlayer}'s turn`;
  Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.textContent = '');
}
