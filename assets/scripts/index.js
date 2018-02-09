'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvent = require('./events')

$(() => {
  setAPIOrigin(location, config)
  authEvent.addHandlers()
  // $(document).on('click', function () {
  //   console.log('hey!')
  // })
})
