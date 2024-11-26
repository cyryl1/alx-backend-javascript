import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(request, response) {
    // Get the database file path from the arguments passed to the script
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((studentsByField) => {
        // Sort fields alphabetically (case-insensitive)
        const sortedFields = Object.keys(studentsByField).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        // Prepare response string
        let responseString = 'This is the list of our students\n';
        
        sortedFields.forEach(field => {
          const students = studentsByField[field];
          responseString += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        response.status(200).send(responseString.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databaseFile = process.argv[2];

    // Validate major
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
