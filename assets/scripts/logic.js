const store = require('./store')
const api = require('./api')

const gameBoard = ['', '', '', '', '', '', '', '', '']
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const picks = [[], []]
let currentTurn = 'x'

const compare = function (playerPoints, winArray) {
  const resultArr = []

  for (let i = 0; i < playerPoints.length; i++) {
    for (let j = 0; j < winArray.length; j++) {
      if (playerPoints[i] === winArray[j]) {
        resultArr.push(playerPoints[i])
      }
    }
  }
  return resultArr.length === 3
}

// const gameEnd = ['x', '', '', 'o', 'x', 'o', 'x', 'o', 'x']
//
// const winExample = [0, 4, 8]

const checkWinRedux = function (board, win, xwins) {
  if (board[win[0]] === 'x' && board[win[1]] === 'x' &&
  board[win[2]] === 'x') {
    // console.log('x wins')
    xwins.push(true)
  } else {
    // console.log('nope')
  }
}

const checkWin = function () {
  if (compare(picks[0], win[0]) === true || compare(picks[0], win[1]) === true ||
compare(picks[0], win[2]) === true || compare(picks[0], win[3]) === true ||
compare(picks[0], win[4]) === true || compare(picks[0], win[5]) === true ||
compare(picks[0], win[6]) === true || compare(picks[0], win[7]) === true) {
    api.updateGameOver()
    alert('X wins!')
  } else if (compare(picks[1], win[0]) === true || compare(picks[1], win[1]) === true ||
compare(picks[1], win[2]) === true || compare(picks[1], win[3]) === true ||
compare(picks[1], win[4]) === true || compare(picks[1], win[5]) === true ||
compare(picks[1], win[6]) === true || compare(picks[1], win[7]) === true) {
    api.updateGameOver()
    alert('O wins!')
  }
}

const fieldPickLogic = function (fieldId, index) {
  if (currentTurn === 'x' && gameBoard[index] === '') {
    picks[0].push(index)
    gameBoard[index] = 'x'
    $(fieldId).text('x')
    // test line below
    api.updateGameCell(index, 'x')
    // test line above
    currentTurn = 'o'
  } else if (currentTurn === 'o' && gameBoard[index] === '') {
    picks[1].push(index)
    gameBoard[index] = 'o'
    $(fieldId).text('o')
    // test line below
    api.updateGameCell(index, 'o')
    // test line above
    currentTurn = 'x'
  } else if (gameBoard[index] !== '') {
    alert('Pick another box plz!')
  }
  store.game.cells = gameBoard
  checkWin()
  console.log(store)
  console.log(store.game)
  // console.log(data.game.cells)
  // api.updateGame(store)
}

module.exports = {
  fieldPickLogic,
  win,
  checkWinRedux
}
