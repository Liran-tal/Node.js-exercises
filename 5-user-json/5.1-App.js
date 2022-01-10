const yargs = require("yargs");
const UsersApi = require('./5.1-usersApi');

yargs.command ({
	command: "post",
	describe: "Add new user to data base. Returns new users` ID",
	builder: {
		name: {
			describe: "name of user to add",
			demandOption: true,
			type: "string",
		},
		email: {
			describe: "email address of new user",
			demandOption: true,
			type: "string",
		}
	},
	handler (argv) {
		UsersApi.postUser(argv.name, argv.email);
	}
})

yargs.command ({
	command: "get",
	describe: "Gets users data by ID",
	builder: {
		id: {
			describe: "ID to search for user",
			demandOption: true,
			type: "string",
		},
	},
	handler (argv) {
		console.log(UsersApi.getUser(argv.id));
	}
})

yargs.command ({
	command: "put",
	describe: "Updates users data. Returns Updated user",
	builder: {
		id: {
			describe: "ID to search for user",
			demandOption: true,
			type: "string",
		},
		newData: {
			describe: "Data to change",
			demandOption: true,
			type: "string",
		},
		field: {
			describe: "Field to change data in",
			demandOption: true,
			type: "string",
		},
	},
	handler (argv) {
		console.log(UsersApi.putUser(argv.id, argv.field, argv.newData));
	}
})

yargs.parse();