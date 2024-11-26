import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

// Use the routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
