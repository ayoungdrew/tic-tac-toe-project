'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
let gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const xPicks = []
const oPicks = []
const currentTurn

// $(() => {
//   $(document).on('click', function () {
//     console.log('hey!')
//   })
// })

// const getScore = function () {
//   for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i] === 'x') {
//       xPicks.push(i)
//     } else if (gameBoard[i] === 'o') {
//       oPicks.push(i)
//     } else {
//       console.log('game score is...')
//     }
//   }
// }
//

// $('#first').text(gameBoard[0])
// $('#second').text(gameBoard[1])
//
// $('#first').on('click', function () {
//   if (currentTurn === 'x' && gameBoard[0] === undefined) {
//     gameBoard[0] = 'x'
//     $(this).text('x')
//   }
//   console.log(gameBoard[0])
// }
// )

//   ```
// first-click: if it's x's turn and value === undefined, text = x
//
// ```

// $(() => {
//   $('.game-field').on('click', function () {
//     $(this).text('xfs')
//   })
// })

const picks = [[4, 3, 2, 5], [0, 1, 6]]
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

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

let checkWin = function () {
  if (compare(picks[0], win[0]) === true || compare(picks[0], win[1]) === true ||
compare(picks[0], win[2]) === true || compare(picks[0], win[3]) === true ||
compare(picks[0], win[4]) === true || compare(picks[0], win[5]) === true ||
compare(picks[0], win[6]) === true || compare(picks[0], win[7]) === true) {
    console.log('X wins!')
  } else if (compare(picks[1], win[0]) === true || compare(picks[1], win[1]) === true ||
compare(picks[1], win[2]) === true || compare(picks[1], win[3]) === true ||
compare(picks[1], win[4]) === true || compare(picks[1], win[5]) === true ||
compare(picks[1], win[6]) === true || compare(picks[1], win[7]) === true) {
    console.log('O wins!')
  }
}
