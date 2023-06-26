const express = require('express');
require("dotenv").config()
const connectDatabase = require('./config/connection.ts');
const identificationRoutes = require('./routes/identifyRoutes.ts');

// Create Express app
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());

// Routes
app.use('/', identificationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
