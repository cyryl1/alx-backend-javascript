const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((fileContent) => {
      // Split lines and remove header and empty lines
      const lines = fileContent.trim().split('\n')
        .slice(1) // Remove header
        .filter(line => line.trim() !== ''); // Remove empty lines

      // Log total number of students
      console.log(`Number of students: ${lines.length}`);

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

      // Sort and log students in each field
      const sortedFields = Object.keys(studentsByField)
        .sort((a, b) => a.localeCompare(b));

      sortedFields.forEach(field => {
        const students = studentsByField[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });
    })
    .catch(() => {
      // If file reading fails, throw an error
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
