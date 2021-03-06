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
			<div class="card col-4">
				<div class="card-body">
					<h5 class="card-title">Menu Category: ${menu.menu}</h5>
					<p class="card-text">ID: ${menu._id}</p>
					<p class="card-text">Name: ${menu.name}</p>
					<p class="card-text">Description: ${menu.description}</p>
					<p class="card-text">Calories: ${menu.calories}</p>
					<p class="card-text">Price: $${menu.price}</p>
				</div>
			</div>
    `
	})

	// set the html for all of our menus all at once
	$('#card-results').html(menusHtml)
}

const onShowSuccess = function (responseData) {
	const menu = responseData.menu

	// log the information we get back from the API so we know how we can
	// interact with it.
	console.log(responseData)

	let menusHtml = ''

	// build HTML element with data for one menu
	menusHtml += `
    <h4>Menu: ${menu.menu}</h4>
		<p>ID: ${menu._id}</p>
    <p>Name: ${menu.name}</p>
    <p>Description: ${menu.description}</p>
    <p>Calories: ${menu.calories}</p>
    <p>Price: $${menu.price}</p>
    <br>
  `

	// replace whatever was in the menu-display element with our menusHtml
	$('#menu-display').html(menusHtml)

	// reset all forms
	$('form').trigger('reset')
}

const onDestroySuccess = function () {
	// add success message to our menu-destroy-message element
	$('#menu-display').html('Menu successfully deleted!')

	// empty out the menu-display element in case it was displaying information
	$('#menu-display').html(
		'Menus have changed! Click "Get All Menus" again to see all the menus'
	)

	// add class for success messaging
	$('#menu-display').addClass('success')


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
	$('#menu-display').addClass('success')

	// use setTimeout to allow the success message to stay for 5 seconds before
	// the message is replaced with '' and the 'success' class is removed
	setTimeout(() => {
		$('#menu-update-message').html('')
		$('#menu-update-message').removeClass('success')
	}, 5000)

	// reset all forms
	$('form').trigger('reset')
}

const onCreateSuccess = function (responseData) {
	const menu = responseData.menu

	let menusHtml = ''

	// add success message to content
	$('#menu-create-message').html('You created a new menu item!')

	// we just created a new menu!
	// we can add a message to let the users know they should request all of
	// the menus again to see the newly created menu included
	menusHtml += `
  	<div>
      <h4>Menu Category: ${menu.menu}</h4>
			<p>ID: ${menu._id}</p>
      <p>Name: ${menu.name}</p>
      <p>Description: ${menu.description}</p>
      <p>Calories: ${menu.calories}</p>
      <p>Price: $${menu.price}</p>
      <br>
			<p>Menus have changed! Click "Get All Menus" again to see all the menu.</p>
		</div>
  `

	$('#menu-display').html(menusHtml)

	// add class for success messaging
	$('#menu-display').addClass('success')

	// reset all forms
	$('form').trigger('reset')
}

const onError = function (err) {
	// log the error for debugging purposes
	console.error(err)

	// display a message to the user to let them know what they were doing did
	// not work correctly
	$('#error-menu').html('Something went wrong, please try again.')

	// add class for error messaging
	$('#error-menu').addClass('failure')

	// use setTimeout to allow the error message to stay for 5 seconds before
	// the message is replaced with '' and the 'failure' class is removed
	setTimeout(() => {
		$('#error-menu').html('')
		$('#error-menu').removeClass('failure')
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
	onError
}
