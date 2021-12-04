'use strict'

const config = require('../config')
const store = require('../store')

const create = function (menuData) {
  return $.ajax({
		url: config.apiUrl + '/menu',
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
    data: menuData
	})
}

const index = function () {
	return $.ajax({
		url: config.apiUrl + '/menus',
		method: 'GET',
	})
}

// getting a single resource is commonly called a show or retrieve action
const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/menus/' + id,
    method: 'GET'
  })
}

// make DELETE request to /menu/:id to delete a single menu
// deleting a single resource is commonly called a destroy action
const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/menu/' + id,
    method: 'DELETE'
  })
}

const update = function (id, menuData) {
  return $.ajax({
    url: config.apiUrl + '/menu/' + id,
    method: 'PATCH',
    // include the menu data that we will use to update the book
    data: menuData
  })
}

module.exports = {
	create,
	index,
	show,
	destroy,
	update
}