'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

// Show every menu (an index or list action)
const onIndexMenus = function () {
	// make API call to get all of the menus
	api
		.index()

		// if API call is successful then pass the data to the onIndexSuccess function
		.then(ui.onIndexSuccess)

		// if API call fails then run our onError function
		.catch(ui.onError)
}

// Show a menu (a show or retrieve action)
const onShowMenu = function (event) {
	// prevent default submit action to stop the page from refreshing
	event.preventDefault()

	// create a javascript object from the form (event.target) where the user entered the menu id
	const menuData = getFormFields(event.target)

	// make API call for getting one menu with the id of the menu we grabbed from the form
	api
		.show(menuData.menu.id)

		// if the API call is successful then pass the data to the onShowSuccess
		// function
		.then(ui.onShowSuccess)

		// if the API call fails then run our onError function
		.catch(ui.onError)
}

// Destroy a menu using a form with a text input for the id
const onDestroyMenu = function (event) {
	// prevent default submit action to stop the page from refreshing
	event.preventDefault()

	// create a javascript object from the form (event.target) where the user entered the menu id
	const menuData = getFormFields(event.target)

	// make API call for destroying one menu with id of the menu we grabbed from the form
	api
		.destroy(menuData.menu.id)

		// if the API call is successful then invoke the onDetroySuccess function
		.then(ui.onDestroySuccess)

		// if the API call fails then run our onError function
		.catch(ui.onError)
}

const onUpdateMenu = function (event) {
	// prevent default submit action to stop the page from refreshing
	event.preventDefault()

	// create a javascript object from the form (event.target) where the user entered
	// the menu information
	const menuData = getFormFields(event.target)

	// extract the id from our menuData's menu
	const id = menuData.menu.id

	// make API call to update one menu with the data we grabbed from the form
	api
		.update(id, menuData)

		// if the API call is successful then invoke the onUpdateSuccess function
		.then(ui.onUpdateSuccess)

		// if the API call fails then run our onError function
		.catch(ui.onError)
}

const onCreateMenu = function (event) {
	// prevent default submit action to stop the page from refreshing
	event.preventDefault()

	// create a javascript object from the form (event.target) where the user entered the menu
	// information
	const MenuData = getFormFields(event.target)

	// make API call to create one menu with the data we grabbed from the form
	api
		.create(MenuData)

		// if the API call is successful then invoke the onCreateSuccess function
		.then(ui.onCreateSuccess)

		// if the API call fails then run our onError function
		.catch(ui.onError)
}

// Handle clicking the dynamic destroy buttons
const onDynamicDestroyMenu = function (event) {
	// event.target is the delete button that was clicked on
	const deleteButton = event.target

	// Extract the id from the delete button that was clicked on's data-id attribute
	const id = $(deleteButton).data('id')

	// make API call for deleting one menu with the data we grabbed from the form
	api
		.destroy(id)

		// if the API call is successful then invoke the onDetroySuccess function
		.then(ui.onDestroySuccess)

		// if the API call fails then run our onError function
		.catch(ui.onError)
}

// Handle submitting the dynamic update forms
const onDynamicUpdateMenu = function (event) {
	// prevent default submit action to stop the page from refreshing
	event.preventDefault()

	// event.target is the update form that was submitted
	const updateForm = event.target

	// Extract the id from the update form that was submitted's data-id attribute
	const id = $(updateForm).data('id')

	// create a javascript object from the form where the user entered the menu
	// information
	const menuData = getFormFields(event.target)

	// make API call to update one menu with the data we grabbed from the form
	api
		.update(id, menuData)

		// if the API call is successful then invoke the onUpdateSuccess function
		.then(ui.onUpdateSuccess)

		// if the API call fails then run our onError function
		.catch(ui.onError)
}

module.exports = {
	onIndexMenus,
	onShowMenu,
	onDestroyMenu,
	onUpdateMenu,
	onCreateMenu,
	onDynamicDestroyMenu,
	onDynamicUpdateMenu,
}
