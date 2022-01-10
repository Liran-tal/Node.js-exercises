const fs = require ('fs');
const uniqid = require('uniqid'); 

const postUser = (name, email) => {
	const usersList = getUsersList();
	const id = uniqid.time();
	const newUser = {
		id: id,
		name: name,
		email: email,
	}

	usersList.push(newUser);
	try {
		fs.writeFileSync('./5-user-json/UsersList.json', JSON.stringify(usersList));
		return id;
	} catch (error) {
		console.log(error);
	}
}

const getUser = (id) => {
	const usersList = getUsersList();
	return usersList.find((user) => {
		return user.id === id;
	});

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
	getUser: getUser,
	// putUser: putUser,
	// removeUser: removeUser,
}