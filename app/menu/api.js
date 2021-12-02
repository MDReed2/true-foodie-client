'use strict'

const config = require('../config')
const store = require('../store')

const create = function (menuData) {
  return $.ajax({
		url: config.apiUrl + '/menus',
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
    data: menuData
	})
}