const store = require('./store')

const signUp = function (data) { // this is the POST verb
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) { // this is the POST verb
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) { // this is the POST verb
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createGame = function (data) { // this is the POST verb
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/games/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) { // this is the POST verb
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame
}
