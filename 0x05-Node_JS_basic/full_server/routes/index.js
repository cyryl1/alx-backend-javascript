// import express from 'express';
// import AppController from '../controllers/AppController';
// import StudentsController from '../controllers/StudentsController';

// const router = express.Router();

// router.get('/', AppController.getHomepage);

// router.get('/students', StudentsController.getAllStudents);

// router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// export default router;

import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

// Home route
router.get('/', AppController.getHomepage);

// Students routes
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
