'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  console.log('Welcome! Whose turn it is: ', currentTurn)
})

// $(() => {
//   $(document).on('click', function () {
//     console.log('hey!')
//   })
// })

const gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const xPicks = []
const oPicks = []
let currentTurn = 'x'

const fieldPickLogic = function (fieldId, index) {
  if (currentTurn === 'x' && gameBoard[index] === undefined) {
    gameBoard[index] = 'x'
    $(fieldId).text('x')
    currentTurn = 'o'
  } else if (currentTurn === 'o' && gameBoard[index] === undefined) {
    gameBoard[index] = 'o'
    $(fieldId).text('o')
    currentTurn = 'x'
  } else if (gameBoard[index] !== undefined) {
    console.log('Pick another box plz!')
  }
  console.log('This field is now:', $(fieldId).text())
  console.log('Thanks for the click! Whose turn it is now: ', currentTurn)
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

// $('#first').on('click', function () {
//   if (currentTurn === 'x' && gameBoard[0] === undefined) {
//     gameBoard[0] = 'x'
//     $(this).text('x')
//     currentTurn = 'o'
//   } else if (currentTurn === 'o' && gameBoard[0] === undefined) {
//     gameBoard[0] = 'o'
//     $(this).text('o')
//     currentTurn = 'x'
//   } else if (gameBoard[0] !== undefined) {
//     console.log('pick another box plz!')
//   }
//   console.log('This field is now:', $(this).text())
//   console.log('Nice pick! Whose turn it is: ', currentTurn)
// }
// )
