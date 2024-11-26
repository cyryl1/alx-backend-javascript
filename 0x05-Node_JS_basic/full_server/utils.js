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
