'use strict'

// Require getFormFields function to access data from forms
const getFormFields = require('../../lib/get-form-fields')

// require api auth functions
const api = require('./api')

// require ui auth functions
const ui = require('./ui')

const onPreSignUp = function (event) {
	event.preventDefault()

	const preSignUp = event.target

	ui.preSignUp(preSignUp)
}

const onBackToSignIn = function (event) {
	event.preventDefault()

	const BackSignIn = event.target

	ui.BackToSignIn(BackSignIn)
}

const onSignUp = function (event) {
	event.preventDefault()

	// event.target is the form that caused the 'submit' event
	const form = event.target
	// get the data from out form element
	const formData = getFormFields(form)

	// make a POST /sign-up request, pass it the email/password/password_confirmation
	api
		.signUp(formData)
		// if our sign up request is successful, run the success sign up function
		.then(ui.signUpSuccess)

		// if error occurred, run the signUpFailure function
		.catch(ui.signUpFailure)
}

const onSignIn = function (event) {
	event.preventDefault()

	const form = event.target

	const formData = getFormFields(form)

	api
		.signIn(formData)
		.then(ui.signInSuccess)

		.catch(ui.signInFailure)
}

const onChangePassword = function (event) {
	event.preventDefault()

	const form = event.target

	const formData = getFormFields(form)

	api
		.changePassword(formData)

		.then(ui.changePasswordSuccess)

		.catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
	event.preventDefault()

	api
		.signOut()

		.then(ui.signOutSuccess)

		.catch(ui.signOutError)
}

module.exports = {
  onPreSignUp,
  onBackToSignIn,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}