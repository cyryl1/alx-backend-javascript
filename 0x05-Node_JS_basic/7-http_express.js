const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async.js');
const database = process.argv[2] || '';

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
	//res.send('This is the list of our students\n');
	try {
		const student = await countStudents(database);
		res.send(`This is the list of our students\n${student}`);
	} catch (err) {
		res.send(err.message);
	}
});

app.listen(1245)

module.exports = app;
