'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const store = require('./store')
const ui = require('./ui')
// const ui = require('./ui')



// HANDLERSSS!
const addHandlers = () => {
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
}

module.exports = {
  addHandlers
}
