// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const menuEvents = require('./menu/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
	$('#sign-in').on('submit', authEvents.onSignIn)
	$('#change-password').on('submit', authEvents.onChangePassword)
	$('#sign-out').on('click', authEvents.onSignOut)
	$('#pre-sign-up').on('click', authEvents.onPreSignUp)
	$('#back-to-sign-in').on('click', authEvents.onBackToSignIn)

	$('#menu-create').on('submit', menuEvents.onCreateMenu)
	$('#menu-search').on('click', menuEvents.onIndexMenus)
	$('#menu-update').on('submit', menuEvents.onUpdateMenu)
	$('#menu-delete').on('submit', menuEvents.onDestroyMenu)
})

$(window).on("loads", () => $('#after-sign-in').hide())
