const { getNumber, getUser } = require('./lib.js');

getUser(3)
	.then(console.log)
	.catch(console.error);

/*
getNumber()
  .then(console.log)
  .catch(console.error)
  ;
*/
