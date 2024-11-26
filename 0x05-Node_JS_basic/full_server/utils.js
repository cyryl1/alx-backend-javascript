// import fs from 'fs';
// import path from 'path';

// /**
//  * Reads a database CSV file and organizes student first names by fields.
//  * @param {string} filePath - Path to the database file.
//  * @returns {Promise<Object>} A promise that resolves to an object with fields as 
//  * keys and arrays of student first names as values.
// */

// export const readDatabase = (filePath) => {
// 	return new Promise((resolve, reject) => {
// 		const filePath = path.resolve(__dirname, '..', filePath);
// 		fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
// 			if (err) reject(err);
// 			const students = JSON.parse(data);
// 			const fields = {};

// 			students.forEach((student) => {
// 				const { firstname, field } = student;
// 				if (!fields[field]) {
// 					fields[field] = [];
// 				}
// 				fields[field].push(firstname);
// 			});
// 			resolve(fields);
// 		});
// 	});
// };

import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // Split data into lines, remove header and empty lines
      const lines = data.trim().split('\n').slice(1);
      
      // Object to store students by field
      const studentsByField = {};

      // Process each line
      lines.forEach(line => {
        const [firstname, , , field] = line.split(',');
        
        // Initialize field array if not exists
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        
        // Add firstname to the corresponding field
        studentsByField[field].push(firstname);
      });

      resolve(studentsByField);
    });
  });
};

export default readDatabase;
