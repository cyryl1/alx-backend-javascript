const { readDatabase } = require('../utils');
const { path } = './././database.csv';

class StudentsController {
	/**
   	* Handles the `/students` route to display student data.
   	* @param {Object} req - The request object.
   	* @param {Object} res - The response object.
   	*/
	static async getAllStudents(req, res) {
		//const path = process.argv[2];
		try {
			const data = await readDatatbase('./database.csv');
			 res.status(200).send(`This is the list of our students
				 ${Object.keys(fields).sort().map((field) => {
					 const students = fields[field];
					 return `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
				}).join('\n')}
			`);
		} catch (err) {
			res.status(500).send('Cannot load the database');
		}
	}


  	/**
   	* Handles the `/students/:major` route to display students by major.
   	* @param {Object} req - The request object.
   	* @param {Object} res - The response object.
   	*/

	static async getAllStudentsByMajor(req, res) {
		const path = process.argv[2];
		const { major } = req.params;

		if (major !== 'CS' || major !== 'SWE') {
			res.status(500).send('Major parameter must be CS or SWE');
			return;
		}

		try {
			const data = await readDatabase('./database.csv');
			const students = data[major]

			if (!students) {
				res.status(200).send(`List:`);
			} else {
				res.status(200).send(`List: ${students.join(', ')}`);
			}
		} catch (error) {
			res.status(500).send('Cannot load the database');
		}
	}
}

export default StudentsController;
