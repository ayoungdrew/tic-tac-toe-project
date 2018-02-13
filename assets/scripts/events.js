'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const logic = require('./logic')
const store = require('./store')
// EVENT HANDLERSSS!
const addHandlers = () => {
  // Control panel/user stuff; scroll down for gameplay handlers

// This clones the original/starting state of the sign up modal
  const originalModal = $('#signUpInner').clone()
  // This resets the sign up modal after someone opens and closes said modal
  $('#sign-up-modal').on('hidden.bs.modal', function () {
    $('#sign-up-modal').html(originalModal)
  })

  $('#sign-up').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('hello sign me up???')
    console.log(data)
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
    // $('#exampleModal').modal('toggle')
    // return false
  })
  $('#sign-in').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to sign in plz')
    // console.log(data)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  })

  $('#create-game').on('submit', function (event) {
    event.preventDefault()
    console.log('Making a new game...')
    api.createGame()
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
  })

  $('#restart-game').on('submit', function (event) {
    event.preventDefault()
    $('.game-field').text('')
    console.log('Restarting game...')
    api.createGame()
      .then(ui.restartGameSuccess)
      .catch(ui.createGameFailure)
    logic.gameBoardReset()
    console.log(store.game)
  })

  // $('#get-all-games').on('submit', function (event) {
  //   event.preventDefault()
  //   // console.log('My game history plzzzzzz')
  //   api.getAllGames()
  //     .then(ui.getAllGamesSuccess)
  //     .catch(ui.getAllGamesFailure)
  // })

  $('#profile-button').on('submit', function (event) {
    event.preventDefault()
    // console.log('My game history plzzzzzz')
    api.getAllGames()
      .then(ui.getAllGamesSuccess)
      .catch(ui.getAllGamesFailure)
  })

  $('#change-password').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to change mah password')
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  })
  $('#sign-out').on('submit', function (event) {
    event.preventDefault()
    console.log('I want to sign out plz')
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.signOutFailure)
  })
  $('#button').submit(function (e) {
    e.preventDefault()
    $('#exampleModal').modal('toggle') // or  $('#IDModal').modal('hide');
    return false
  })
  // Game board handlers
  $('#first').on('click', function () { logic.fieldPickLogic('#first', 0) })
  $('#second').on('click', function () { logic.fieldPickLogic('#second', 1) })
  $('#third').on('click', function () { logic.fieldPickLogic('#third', 2) })
  $('#fourth').on('click', function () { logic.fieldPickLogic('#fourth', 3) })
  $('#fifth').on('click', function () { logic.fieldPickLogic('#fifth', 4) })
  $('#sixth').on('click', function () { logic.fieldPickLogic('#sixth', 5) })
  $('#seventh').on('click', function () { logic.fieldPickLogic('#seventh', 6) })
  $('#eighth').on('click', function () { logic.fieldPickLogic('#eighth', 7) })
  $('#ninth').on('click', function () { logic.fieldPickLogic('#ninth', 8) })
}

module.exports = {
  addHandlers
}
