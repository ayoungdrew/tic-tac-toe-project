'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvent = require('./events')

$(() => {
  setAPIOrigin(location, config)
  authEvent.addHandlers()
  // $(document).on('click', function () {
  //   console.log('hey!')
  // })
})

const gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
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

const checkWin = function () {
  if (compare(picks[0], win[0]) === true || compare(picks[0], win[1]) === true ||
compare(picks[0], win[2]) === true || compare(picks[0], win[3]) === true ||
compare(picks[0], win[4]) === true || compare(picks[0], win[5]) === true ||
compare(picks[0], win[6]) === true || compare(picks[0], win[7]) === true) {
    alert('X wins!')
  } else if (compare(picks[1], win[0]) === true || compare(picks[1], win[1]) === true ||
compare(picks[1], win[2]) === true || compare(picks[1], win[3]) === true ||
compare(picks[1], win[4]) === true || compare(picks[1], win[5]) === true ||
compare(picks[1], win[6]) === true || compare(picks[1], win[7]) === true) {
    alert('O wins!')
  }
}

const fieldPickLogic = function (fieldId, index) {
  if (currentTurn === 'x' && gameBoard[index] === undefined) {
    picks[0].push(index)
    gameBoard[index] = 'x'
    $(fieldId).text('x')
    currentTurn = 'o'
  } else if (currentTurn === 'o' && gameBoard[index] === undefined) {
    picks[1].push(index)
    gameBoard[index] = 'o'
    $(fieldId).text('o')
    currentTurn = 'x'
  } else if (gameBoard[index] !== undefined) {
    alert('Pick another box plz!')
  }
  checkWin()
  console.log('X\'s picks: ', picks[0], 'O\'s picks: ', picks[1], 'Whose turn it is now: ', currentTurn)
}

$('#first').on('click', function () { fieldPickLogic('#first', 0) })
$('#second').on('click', function () { fieldPickLogic('#second', 1) })
$('#third').on('click', function () { fieldPickLogic('#third', 2) })
$('#fourth').on('click', function () { fieldPickLogic('#fourth', 3) })
$('#fifth').on('click', function () { fieldPickLogic('#fifth', 4) })
$('#sixth').on('click', function () { fieldPickLogic('#sixth', 5) })
$('#seventh').on('click', function () { fieldPickLogic('#seventh', 6) })
$('#eighth').on('click', function () { fieldPickLogic('#eighth', 7) })
$('#ninth').on('click', function () { fieldPickLogic('#ninth', 8) })
