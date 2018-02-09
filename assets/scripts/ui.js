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

module.exports = {
  signUpSuccess,
  signUpFailure
}
