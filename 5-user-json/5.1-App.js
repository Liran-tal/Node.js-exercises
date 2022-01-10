const yargs = require("yargs");
const UsersApi = require('./5.1-usersApi');

yargs.command ({
	command: "post",
	describe: "Add new user to data base",
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
		// console.log(arg);
		// console.log(UsersApi.postUser);
		UsersApi.postUser(argv.name, argv.email);
	}
})

yargs.parse();