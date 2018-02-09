'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const logic = require('./logic')

// EVENT HANDLERSSS!
const addHandlers = () => {
  // Control panel/user stuff; scroll down for gameplay handlers
  $('#sign-up').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('hello sign me up???')
    console.log(data)
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
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
  $('#change-password').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to change mah password')
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  })
  $('#create-game').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I wanna make a game')
    api.createGame(data)
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
  })
  $('#sign-out').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to sign out plz')
    api.signOut(data)
      .then(ui.signOutSuccess)
      .catch(ui.signOutFailure)
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
