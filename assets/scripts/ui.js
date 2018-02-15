const store = require('./store')
const logic = require('./logic')

const signUpStart = function (data) {
  $('#signUpForms, #signUpSubmit').css({
    'display': 'block'
  })
  // $('#signUpModal').modal('toggle')
  console.log(data)
}

const signUpSuccess = function (data) {
  $('#sign-up-modal-message').html('Signed up succesfully').addClass('successMessage')
  $('#signUpForms, #signUpSubmit, #register-button').css({
    'display': 'none'
  })
  // $('#signUpModal').modal('toggle')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#sign-up-modal-message').html('Sign up failure. Try again plz').addClass('failureMessage')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#greeting-text, #create-game, #sign-out, #profile-button')
    // .css({
    //   'display': 'block'
    // })
    .fadeIn('slow')
  $('#sign-in, #sign-up-button').css({
    'display': 'none'
  })
  $('header').css({
    'min-height': '0px'
  })
    .animate({
      opacity: 0.1,
      up: '+=100',
      height: 'toggle'
    }, 1000, function () {
    // Animation complete.
    })
  store.user = data.user
  console.log('AJAX data returned:', data)
  console.log(store.user)
}

const signInFailure = function (error) {
  $('#message').html('Sign in failure. Try again plz').attr('class', 'failureMessage')
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#change-password-message').html('Successfully changed password').attr('class', 'successMessage')
  console.log(data)
  console.log(store.user)
}

const changePasswordFailure = function (error) {
  $('#change-password-message').html('Failed to change password. Try again plz').attr('class', 'failureMessage')
  console.error(error)
}

const createGameSuccess = function (data) {
  $('#restart-game, #game-hud').css({
    'display': 'block'
  })
  $('.game-board-parent')
    .css('display', 'flex')
    .hide()
    .fadeIn()
  $('#create-game, #greeting-text').css({
    'display': 'none'
  })
  store.game = data.game
  console.log(data)
  console.log(store.game)
  console.log('Game ID is', store.game.id)
}

const createGameFailure = function (error) {
  $('#message').text('Create game failure ):')
  $('#message').css({
    'color': 'white',
    'background-color': 'red'
  })
  console.error(error)
}

const restartGameSuccess = function (data) {
  store.game = data.game
  console.log(data)
  console.log(store.game)
  console.log('New game ID is', store.game.id)
}

// Retrieve logged in player's game history, statistics, etc.
const getAllGamesSuccess = function (data) {
  console.log('AJAX request returned:', data)
  console.log('All games you\'ve played:', data.games)
  const gamesOver = []
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      gamesOver.push(data.games[i])
    }
  }
  const xWins = []
  let winRate
  console.log('Games you\'ve completed:', gamesOver)
  for (let i = 0; i < gamesOver.length; i++) {
    for (let j = 0; j < logic.win.length; j++) {
      logic.checkWinRedux(gamesOver[i].cells, logic.win[j], xWins)
    }
    winRate = Math.round((xWins.length / gamesOver.length) * 100) + '%'
  }
  $('#game-history-message').html(`<h4>Game History</h4>You've won ${xWins.length} out of ${gamesOver.length} games. <br>
  Your win rate: ${winRate}`)
}

const getAllGamesFailure = function (error) {
  $('#message').text('Get all games failure ):')
  $('#message').css({
    'color': 'white',
    'background-color': 'red'
  })
  console.log('errrrrror')
  console.error(error)
}

const signOutSuccess = function (data) {
  $('.game-board-parent, #greeting-text, #game-hud, #profile-button, #create-game, #restart-game, #sign-out')
    .css({
      'display': 'none'
    })
  $('#sign-in, #sign-up-button')
    // .css({
    //   'display': 'block'
    // })
    .fadeIn('slow')
  $('header')
    .animate({
      opacity: 1.0,
      up: '+=100',
      height: 'toggle'
    }, 1000, function () {
    // Animation complete.
    })
  console.log(data)
  console.log(store.user)
}

const signOutFailure = function (error) {
  $('#message').text('Sign out failure')
  $('#message').css({
    'color': 'white',
    'background-color': 'red'
  })
  console.error(error)
}

module.exports = {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  restartGameSuccess,
  getAllGamesSuccess,
  getAllGamesFailure,
  signOutSuccess,
  signOutFailure
}
