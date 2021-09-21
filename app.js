// Imports
const express = require("express");
const cors = require("cors"); // Cors middleware

// Init app
const app = express();

// Store port number in a variable
const port = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Listen to port
app.listen(port, () => console.log(`Listening on port ${port}`));