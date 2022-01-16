const express = require('express');

const app = express();
app.use(express.json());
const port = 8080;
const numbers = [1,2,3,4,5,6];

app.post('/numbers', (req, res) => {
	const { number } = req.body;
	if (!numbers.includes(number)) {
		numbers.push(number);
		res.send(JSON.stringify(numbers));
	}
	else {
		res.send("ERROR 400: Item already exist.")
 	}
});

app.get('/numbers', (req, res) => {
	res.send(JSON.stringify(numbers));
});

app.put('/numbers', (req, res) => {
	const { id } = req.query;
	const { newNumber } = req.body;
	if (numbers.includes(Number(id))) {
		numbers.splice(numbers.indexOf(Number(id)), 1, newNumber);
		res.send(JSON.stringify(numbers));
	}
	else {
		 res.send("ERROR 400: Item does not exist.")
	}
});

app.delete('/numbers', (req, res) => {
	const { id } = req.query;
	if (numbers.includes(Number(id))) {
		numbers.splice(numbers.indexOf(Number(id)), 1);
		res.send(JSON.stringify(numbers));
	}
	else {
		 res.send("ERROR 400: Item does not exist.")
	}
});


app.listen(port, console.log("server is runnig on port: " + port));