const store = require('./store')
const api = require('./api')

// store.game.cells starts off as: ['', '', '', '', '', '', '', '', '']
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let picks = [[], []]
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
// const winExample = [0, 4, 8]

const checkWinRedux = function (board, win, xwins) {
  if (board[win[0]] === 'x' && board[win[1]] === 'x' &&
  board[win[2]] === 'x') {
    // console.log('x wins')
    xwins.push(true)
  }
}

const checkWin = function () {
  if ((store.game.over === false) && (compare(picks[0], win[0]) === true || compare(picks[0], win[1]) === true ||
compare(picks[0], win[2]) === true || compare(picks[0], win[3]) === true ||
compare(picks[0], win[4]) === true || compare(picks[0], win[5]) === true ||
compare(picks[0], win[6]) === true || compare(picks[0], win[7]) === true)) {
    store.game.over = true
    api.updateGameOver()
    alert('X wins!')
  } else if ((store.game.over === false) && (compare(picks[1], win[0]) === true || compare(picks[1], win[1]) === true ||
compare(picks[1], win[2]) === true || compare(picks[1], win[3]) === true ||
compare(picks[1], win[4]) === true || compare(picks[1], win[5]) === true ||
compare(picks[1], win[6]) === true || compare(picks[1], win[7]) === true)) {
    store.game.over = true
    api.updateGameOver()
    alert('O wins!')
  }
}

const gameBoardReset = () => {
  store.game.over = false
  store.game.cells = ['', '', '', '', '', '', '', '', '']
  picks = [[], []]
  currentTurn = 'x'
}

const fieldPickLogic = function (fieldId, index) {
  if (store.game.over === false && currentTurn === 'x' && store.game.cells[index] === '') {
    picks[0].push(index)
    store.game.cells[index] = 'x'
    $(fieldId).text('x')
    api.updateGameCell(index, 'x')
    currentTurn = 'o'
    console.log(store.game)
  } else if (store.game.over === false && currentTurn === 'o' && store.game.cells[index] === '') {
    picks[1].push(index)
    store.game.cells[index] = 'o'
    $(fieldId).text('o')
    api.updateGameCell(index, 'o')
    currentTurn = 'x'
    console.log(store.game)
  } else if (store.game.over === false && store.game.cells[index] !== '') {
    alert('Pick another box plz!')
  } else {
    alert('This game is over, bro')
  }
  checkWin()
  console.log(store.game.id)
  console.log(store.game)
}

module.exports = {
  fieldPickLogic,
  checkWinRedux,
  win,
  currentTurn,
  gameBoardReset
}
