const store = require('./store')
const logic = require('./logic')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
  })
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failure')
  $('#message').css({
    'color': 'white',
    'background-color': 'red'
  })
  console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in succesfully')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
  })
  $('#game-board, #change-password, #create-game, #get-all-games, #sign-out').css({
    'display': 'block'
  })
  $('#sign-in, #sign-up').css({
    'display': 'none'
  })
  store.user = data.user
  console.log(data)
  console.log(store.user)
}

const signInFailure = function (error) {
  $('#message').text('Sign in failure')
  $('#message').css({
    'color': 'white',
    'background-color': 'red'
  })
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password succesfully')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
  })
  console.log(data)
  console.log(store.user)
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failure D:')
  $('#message').css({
    'color': 'white',
    'background-color': 'red'
  })
  console.error(error)
}

const createGameSuccess = function (data) {
  $('#message').text('Created game! Nice!')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
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

const getAllGamesSuccess = function (data) {
  $('#message').text('Retrieved game history!')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
  })
  store.games = data.games
  console.log(data)
  console.log(store.games)
  const gamesOver = []
  for (let i = 0; i < store.games.length; i++) {
    if (store.games[i].over === true) {
      gamesOver.push(store.games[i])
    }
  }
  // console.log('Finished ', gamesOver.length, 'games')
  // for (let i = 0; i < gamesOver.length; i++) {
  //   logic.compare(gamesOver[i], )
  // console.log(gamesOver[i])
  // }
  console.log(gamesOver)
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
  $('#message').text('Signed out succesfully')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
  })
  $('#game-board, #change-password, #create-game, #sign-out').css({
    'display': 'none'
  })
  $('#sign-in, #sign-up').css({
    'display': 'block'
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  getAllGamesSuccess,
  getAllGamesFailure,
  signOutSuccess,
  signOutFailure
}
