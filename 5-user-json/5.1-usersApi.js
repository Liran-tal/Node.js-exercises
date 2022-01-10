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
		setUsersList(usersList);
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

const putUser = (id, field, newData) => {
	const usersList = getUsersList();
	const userIndex = getUserindex(usersList, id);
	const user = usersList[userIndex];
	user[field] = newData;
	usersList.splice(userIndex, 1, user);
	try {
		setUsersList(usersList);
		return user;
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

const setUsersList = (newList) => {
	fs.writeFileSync('./5-user-json/UsersList.json', JSON.stringify(newList));
}

const getUserindex = (usersList, id) => {
	return usersList.findIndex((user) => {
		return user.id === id
	})
}

module.exports = {
	postUser: postUser,
	getUser: getUser,
	putUser: putUser,
	// removeUser: removeUser,
}