'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const store = require('./store')
// const ui = require('./ui')

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
  console.log(data)
  store.user = data.user
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

const signOutSuccess = function (data) {
  $('#message').text('Signed out succesfully')
  $('#message').css({
    'color': 'white',
    'background-color': 'green'
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

// HANDLERSSS!
const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('hello sign me up???')
    console.log(data)
    api.signUp(data)
      .then(signUpSuccess)
      .catch(signUpFailure)
  })
  $('#sign-in').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to sign in plz')
    // console.log(data)
    api.signIn(data)
      .then(signInSuccess)
      .catch(signInFailure)
  })
  $('#change-password').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to change mah password')
    api.changePassword(data)
      .then(changePasswordSuccess)
      .catch(changePasswordFailure)
  })
  $('#sign-out').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to sign out plz')
    api.signOut(data)
      .then(signOutSuccess)
      .catch(signOutFailure)
  })
}

module.exports = {
  addHandlers
}
