const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs').promises;

const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // Handle routing based on URL path
  if (req.url === '/') {
    // Home route
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Students route
    // Get the database file path from command line arguments
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.writeHead(500);
      res.end('Database file path is required');
      return;
    }

    // Read the file and process students
    fs.readFile(databaseFile, 'utf8')
      .then((fileContent) => {
        // Split lines and remove header and empty lines
        const lines = fileContent.trim().split('\n')
          .slice(1) // Remove header
          .filter(line => line.trim() !== ''); // Remove empty lines

        // Prepare response string
        let responseString = `This is the list of our students\n`;
        responseString += `Number of students: ${lines.length}\n`;

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

        // Sort and add students in each field to response
        const sortedFields = Object.keys(studentsByField)
          .sort((a, b) => a.localeCompare(b));

        sortedFields.forEach(field => {
          const students = studentsByField[field];
          responseString += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        // Send the complete response
        res.end(responseString.trim());
      })
      .catch((error) => {
        // If there's an error reading the database
        res.writeHead(500);
        res.end('Cannot load the database');
      });
  } else {
    // Handle any other routes
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Have the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Export the app for potential use in testing
module.exports = app;
