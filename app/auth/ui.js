'use strict'
// Require the store object. We will use it to share data between different files.
const store = require('../store')

const signUpSuccess = function (responseData) {
	$('#menu-display').text('Sign up successful')

	$('#menu-display').removeClass()
	$('#menu-display').addClass('text-success')
	$('form').trigger('reset')

	console.log('Response data is ', responseData)
}

const signUpFailure = function (error) {
	$('#error-menu').text('Sign up failed')

	$('#error-menu').removeClass()
	$('#error-menu').addClass('text-danger')
	console.error('Error is', error)
}

const signInSuccess = function (responseData) {
	//  we are going to add their `user` we got back in our responses data to the store object. So // we can access the user's token in api.js
	store.user = responseData.user
	console.log('store is ', store)

	$('#after-sign-in-message').text('You have been successfully signed in!')

	$('#after-sign-in-message').removeClass()
	$('#after-sign-in-message').addClass('text-success')
	$('form').trigger('reset')

  setTimeout(() => $('#after-sign-in-message').text(''), 3000)

	// Before signing in hide the section with the id `before-sign-in`
	$('#before-sign-in').hide()
	// After signing in show the section with the id `after-sign-in`
	$('#after-sign-in').show()
}

const signInFailure = function (error) {
	$('#error-menu').text(
		'Sign in unsuccessful. Please ensure credentials are correct.'
	)

	$('#error-menu').removeClass()
	$('#error-menu').addClass('text-danger')

  setTimeout(() => $('#error-menu').text(''), 3000)

	console.error('Error is', error)
}

const changePasswordSuccess = function (responseData) {
	$('#menu-display').text('Changed password successfully')

	$('#menu-display').removeClass()
	$('#menu-display').addClass('text-success')
	$('form').trigger('reset')

  setTimeout(() => $('#menu-display').text(''), 3000)

	console.log('Response data is ', responseData)
}

const changePasswordFailure = function (error) {
	$('#error-menu').text('Password change failed')

	$('#error-menu').removeClass()
	$('#error-menu').addClass('text-danger')

  setTimeout(() => $('#error-menu').text(''), 3000)
	console.error('Error is', error)
}

const signOutSuccess = function (responseData) {
	$('#menu-display').text('You have been signed out successfully')

	$('#menu-display').removeClass()
	$('#menu-display').addClass('text-success')
	$('form').trigger('reset')

	$('#after-sign-in').hide()

	$('#before-sign-in').show()

	console.log('responseData is ', responseData)
}

const signOutError = function (error) {
	$('#error-menu').text('There was a error signing you out')

	$('#error-menu').removeClass()
	$('#error-menu').addClass('text-danger')
	console.error('Error is', error)
}

const preSignUp = function () {
	$('.sign-up-card').show()
	$('#back-to-sign-in').show()
	$('.sign-in-card').hide()
	$('#pre-sign-up').hide()
}

const BackToSignIn = function () {
	$('.sign-up-card').hide()
	$('.sign-in-card').show()
	$('#back-to-sign-in').hide()
	$('#pre-sign-up').show()
}

module.exports = {
	signUpSuccess,
	signUpFailure,
	signInSuccess,
	signInFailure,
	changePasswordSuccess,
	changePasswordFailure,
	signOutSuccess,
	signOutError,
  preSignUp,
  BackToSignIn
}