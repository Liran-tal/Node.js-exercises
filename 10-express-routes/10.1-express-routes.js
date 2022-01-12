const express = require('express');

const app = express();
const port = 8080;

app.post('/numbers', (req, res) => {
	res.send("success using post")
});

app.get('/numbers', (req, res) => {
	res.send("success using get")
});

app.put('/numbers', (req, res) => {
	res.send("success using put")
});

app.delete('/numbers', (req, res) => {
	res.send("success using delete")
});


app.listen(port, console.log("server is runnig on port: " + port));