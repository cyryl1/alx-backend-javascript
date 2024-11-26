const fs = require('fs');
const { parse } = require('csv-parse');

function countStudents(path) {
        return new Promise((resolve, reject) => {
		let retString = '';
                fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				throw new Error('Cannot load the database');
				return;
			}

			parse(data, { delimiter: ',', from_line: 2 }, (err, records) => {
				if (err) {
					reject(new Error('Cannot parse the CSV data'));
					return;
				}
				const fields = {};

				const validRows = records.filter(row => row.length > 0 && row[0] !== '');
				validRows.forEach(row => {
					const firstName = row[0];
					const field = row[3];

					if (!fields[field]) {
						fields[field] = [];
					}
					fields[field].push(firstName);
				});

				const totalStudents = validRows.length;
				retString += (`Number of students: ${totalStudents}\n`);
				//let result = `Number of students: ${totalStudents}\n`;

				Object.entries(fields).forEach(([field, students]) => {

					retString += (`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
					//result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
				});

				resolve(retString);
			});
		});
	});
}

module.exports = countStudents;

