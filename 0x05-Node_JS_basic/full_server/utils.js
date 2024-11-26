import fs from 'fs';
import path from 'path';

/**
 * Reads a database CSV file and organizes student first names by fields.
 * @param {string} filePath - Path to the database file.
 * @returns {Promise<Object>} A promise that resolves to an object with fields as 
 * keys and arrays of student first names as values.
*/

export const readDatabase = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
			if (err) reject(err);
			const students = JSON.parse(data);
			const fields = {};

			students.forEach((student) => {
				const { firstname, field } = student;
				if (!fields[field]) {
					fields[field] = [];
				}
				fields[field].push(firstname);
			});
			resolve(fields);
		});
	});
};
