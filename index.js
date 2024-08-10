const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like your HTML file)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route that returns a simple message
app.get('/hello', (req, res) => {
    res.send('<p>Hello from the server!</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`HTMX Express demo app listening at http://localhost:${port}`);
});
