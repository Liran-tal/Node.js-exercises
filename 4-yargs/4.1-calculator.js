// import yargs from 'yargs'
const { argv } = require('yargs');
const yargs = require('yargs');
const args = yargs.argv._;

yargs.command({
	command: 'add',
	describe: "adding numbers",
	handler: function () {
		console.log(
			`${args[1]} + ${args[2]} = `, Number(args[1]) + Number(args[2])
		);
		
	}
});

yargs.command({
	command: 'sub',
	describe: "Substruct one number from another",
	builder: {
		firstNumber: {
			describe: "Base number",
			demandOption: true,
			type: "number",
		},
		secondNumber: {
			describe: "Number to substruct",
			demandOption: true,
			type: "number",
		}
	},
	handler: function () {
		console.log(
			// `${args[1]} - ${args[2]} = `, Number(args[1]) - Number(args[2])
			// `${yargs.argv._[1]} - ${yargs.argv._[2]} = `, Number(yargs.argv._[1]) - Number(yargs.argv._[2])
			`${argv.firstNumber} - ${argv.secondNumber} = `, Number(argv.firstNumber) - Number(argv.secondNumber)
		);
	}
});

yargs.command({
	command: 'multi',
	describe: "Multiply one number with another number",
	builder: {
		firstNumber: {
			describe: "Base number",
			demandOption: true,
			type: "number",
		},
		secondNumber: {
			describe: "Multiplyer",
			demandOption: true,
			type: "number",
		}
	},
	handler: function () {
		console.log(
			`${argv.firstNumber} * ${argv.secondNumber} = `, Number(argv.firstNumber) * Number(argv.secondNumber)
		);
	}
});

yargs.command({
	command: 'pow',
	describe: "Multiply one number with itself n times",
	builder: {
		base: {
			describe: "Base",
			demandOption: true,
			type: "number",
		},
		power: {
			describe: "power",
			demandOption: true,
			type: "number",
		}
	},
	handler: function () {
		console.log(
			`${argv.base} ^ ${argv.power} = `, Number(argv.base) ** Number(argv.power)
		);
	}
});



yargs.parse()