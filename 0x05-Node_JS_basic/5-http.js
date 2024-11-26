const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2] || '';

const app =  http.createServer(async (req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });

		res.write('This is the list of out students\n');
		try {
			const response = await countStudents(databasePath);
			res.write(responsei)
		} catch (err) {
			res.write(err.message);
		}
		res.end();
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
});

app.listen(1245);

module.exports = app;
