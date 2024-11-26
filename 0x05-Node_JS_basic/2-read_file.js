const fs = require('fs');
const { parse } = require('csv-parse');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, { encoding: 'utf8' });
		//const students = [];
		
		parse(data, { delimeter: ",", from_line: 2 }, (err, records) => {
			if (err) {
				throw new Error('Cannot parse the CSV data');
			}

			const fields = {};

			records.forEach(row => {
				if (row.length === 0 || row[0] === '') return;

				const firstName = row[0];
				const field = row[3];

				if (!fields[field]) {
					fields[field] = [];
				}
				fields[field].push(firstName);;
			});

			const totalStudents = records.filter(row => row.length > 0 && row[0] !== '').length;
			console.log(`Number of students: ${totalStudents}`);
			Object.keys(fields).forEach(field => {
				console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(',')}`);
			});
		});
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
