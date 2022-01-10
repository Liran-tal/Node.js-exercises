const fs = require ('fs');
const uniqid = require('uniqid'); 

const postUser = (name, email) => {
	const id = uniqid.time();
	const newUser = {
		id: id,
		name: name,
		email: email,
	}
	try {
		fs.appendFileSync('./5-user-json/UsersList.json', JSON.stringify(newUser));
	} catch (error) {
		console.log(error);
	}
}

const getUsersList = () => {
	try {
		return (
			JSON.parse(fs.readFileSync('./5-user-json/UsersList.json').toString())
		)
	} catch (error) {
		console.log(error);
		return [];
	}
}


module.exports = {
	postUser: postUser,
	// getUser: getUser,
	// putUser: putUser,
	// removeUser: removeUser,
}