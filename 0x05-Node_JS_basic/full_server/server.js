// import express from 'express';
// import routes from './routes/index';

// const app = express();
// const port = 1245;

// app.use(routes);

// app.listen(port);

// export default app;

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
