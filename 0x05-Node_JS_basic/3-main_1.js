const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then((res) => {
	    console.log(res);
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
