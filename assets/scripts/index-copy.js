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
