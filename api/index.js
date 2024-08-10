const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Define a route that returns a simple message
app.get('/hello', (req, res) => {
    res.send('<p>Hello from the server!</p>');
});

module.exports = app;
