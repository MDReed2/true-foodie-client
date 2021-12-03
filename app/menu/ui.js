'use strict'

const onIndexSuccess = function (responseData) {
	// extract the menus from the response's data into a variable
	const menus = responseData.menus

	// log the information we get back from the API so we know how we can
	// interact with it.
	console.log(responseData)

	// create a string that will store the html for all of the menus we want to
	// display on the page. Start as an empty string.
	let menusHtml = ''

	// loop through each menu from the API
	menus.forEach((menu) => {
		// add (concatenate) the menu html for each menu, to the booksHtml string
		//
		// when adding the delete button add a data-id attribute, with the id of the
		// button we want to delete
		// add a data-id attribute for our dynamic edit form as well
		menusHtml += `
      <h4>Menu Category: ${menu.category}</h4>
      <p>Name: ${menu.name}</p>
      <p>Description: ${menu.description}</p>
      <p>Calories: ${menu.calories}</p>
      <p>Price: ${menu.price}</p>
      <form class="menus-update-dynamic" data-id=${menus._id}>
        <input type="text" name="menu[category]" placeholder="Menu Category" required>
        <input type="text" name="menu[name]" placeholder="Name of dish" required>
        <button type="submit">Update Dish</button>
      </form>
      <button class='menu-destroy-dynamic' data-id=${menus._id}>Delete Menu Item</button>
      <br>
    `
	})

	// set the html for all of our menus all at once
	$('#menu-display').html(menusHtml)
}

const onShowSuccess = function (responseData) {
	// log the information we get back from the API so we know how we can
	// interact with it.
	console.log(responseData)

	// build HTML element with data for one menu
	const menusHtml = `
    <h4>Menu: ${responseData.menu.category}</h4>
    <p>Name: ${responseData.menu.name}</p>
    <p>Description: ${responseData.menu.description}</p>
    <p>Calories: ${responseData.menu.calories}</p>
    <p>Price: ${responseData.menu.price}</p>
    <br>
  `

	// replace whatever was in the menu-display element with our menusHtml
	$('#menu-display').html(menusHtml)

	// reset all forms
	$('form').trigger('reset')
}

const onDestroySuccess = function () {
	// add success message to our menu-destroy-message element
	$('#menu-destroy-message').html('Menu successfully deleted!')

	// empty out the menu-display element in case it was displaying information
	$('#menu-display').html(
		'Menus have changed! Click "Get All Menus" again to see all the menus'
	)

	// add class for success messaging
	$('#menus-destroy-message').addClass('success')

	// use setTimeout to allow the success message to stay for 5 seconds before
	// the message is replaced with '' and the 'success' class is removed
	setTimeout(() => {
		$('#menus-destroy-message').html('')
		$('#menus-destroy-message').removeClass('success')
	}, 5000)

	// reset all forms
	$('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
	// add success message to our menu-update-message element
	$('#menu-update-message').html('You successfully updated the menu')

	// empty out the menus-display element in case it was displaying information
	// about the menu we just updated, replace with a message for the user to get
	// all the menus again.
	$('#menu-display').html(
		'Menus have changed! Click "Get All Menus" again to see all the menus.'
	)

	// add class for success messaging
	$('#menu-update-message').addClass('success')

	// use setTimeout to allow the success message to stay for 5 seconds before
	// the message is replaced with '' and the 'success' class is removed
	setTimeout(() => {
		$('#menu-update-message').html('')
		$('#menu-update-message').removeClass('success')
	}, 5000)

	// reset all forms
	$('form').trigger('reset')
}

const onCreateSuccess = function () {
	// add success message to content
	$('#menu-create-message').html('You created a new menu item!')

	// we just created a new menu!
	// we can add a message to let the users know they should request all of
	// the menus again to see the newly created menu included
	$('#menu-display').html(
		'Menus have changed! Click "Get All Menus" again to see all the menu.'
	)

	// add class for success messaging
	$('#menu-create-message').addClass('success')

	// use setTimeout to allow the success message to stay for 5 seconds before
	// the message is replaced with '' and the 'success' class is removed
	setTimeout(() => {
		$('#menu-create-message').html('')
		$('#menu-create-message').removeClass('success')
	}, 5000)

	// reset all forms
	$('form').trigger('reset')
}

const onError = function (err) {
	// log the error for debugging purposes
	console.error(err)

	// display a message to the user to let them know what they were doing did
	// not work correctly
	$('#error-message').html('Something went wrong, please try again.')

	// add class for error messaging
	$('#error-message').addClass('failure')

	// use setTimeout to allow the error message to stay for 5 seconds before
	// the message is replaced with '' and the 'failure' class is removed
	setTimeout(() => {
		$('#error-message').html('')
		$('#error-message').removeClass('failure')
	}, 5000)

	// reset all forms
	$('form').trigger('reset')
}

module.exports = {
	onIndexSuccess,
	onShowSuccess,
	onDestroySuccess,
	onUpdateSuccess,
	onCreateSuccess,
	onError,
}
