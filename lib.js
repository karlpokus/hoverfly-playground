const rp = require('request-promise-native');
const axios = require('axios');

function getNumber() {
	return axios.get('http://jsonplaceholder.typicode.com/users?apiKey=123')
		.then(res => res.data.length)
	/*
  return rp({
    uri: 'http://jsonplaceholder.typicode.com/users?apiKey=123',
    json: true,
  }).then(users => users.length);
	*/
};

function getUser(number) {
	return axios.get(`http://jsonplaceholder.typicode.com/users/${number}`)
		.then(res => res.data)
	/*
  return rp({
    uri: `http://jsonplaceholder.typicode.com/users/${number}`,
    json: true,
  });
	*/
};

module.exports = { getNumber, getUser };
