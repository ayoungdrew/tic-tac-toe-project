const store = require('./store')

const signUp = function (data) { // this is the POST verb
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) { // this is the POST verb
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const createGame = function () { // this is the POST verb
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGameCell = function (cellIndex, playerAvatar) {
  return $.ajax({
    url: `https://aqueous-atoll-85096.herokuapp.com/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: playerAvatar
        }
      }
    }
  })
}

const updateGameOver = function () {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        over: true
      }
    }
  })
}

const getAllGames = function () {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGame = function () {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/' + store.game.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) { // this is the POST verb
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) { // this is the POST verb
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-out/' + store.user.id,
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
  createGame,
  getAllGames,
  getGame,
  changePassword,
  updateGameOver,
  updateGameCell
}
