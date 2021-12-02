'use strict'

const config = require('../config')
const store = require('../store')

// formData will be our credentials object with email/password/conformation
const signUp = function (formData) {
  // make a request to POST /sign-up
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
	return $.ajax({
		url: `${config.apiUrl}/sign-in`,
		method: 'POST',
		data: formData,
	})
}

const changePassword = function (formData) {
	// make a request to PATCH /change-password
	return $.ajax({
		url: `${config.apiUrl}/change-password`,
		method: 'PATCH',
		// make sure to send the formData along as the body of our request
		// this is similar to --data in the curl script
		data: formData,
		// Add our authorization header, so the api can use the token
		// to know who is trying to change the password
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

const signOut = function (formData) {
	return $.ajax({
		url: `${config.apiUrl}/sign-out`,
		method: 'DELETE',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}



module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}