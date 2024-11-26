const fs = require('fs');

function countStudents(path) {
  let fileContent;
  
  // Read file synchronously
  try {
    fileContent = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

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

  // Log students in each field
  Object.entries(studentsByField)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
}

module.exports = countStudents;
