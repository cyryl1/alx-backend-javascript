const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2] || './database.csv';
  
  try {
    const studentList = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;;
