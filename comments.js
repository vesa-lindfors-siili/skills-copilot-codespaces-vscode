// Create web server
// 1. require express
// 2. require body-parser
// 3. create express app
// 4. create a port
// 5. create a route for GET request to /comments
// 6. create a route for POST request to /comments
// 7. listen on port

// 1. require express
const express = require('express');

// 2. require body-parser
const bodyParser = require('body-parser');

// 3. create express app
const app = express();

// 4. create a port
const port = 3000;

// 5. create a route for GET request to /comments
app.get('/comments', (req, res) => {
    res.json({ comments: [{ body: 'some comment' }, { body: 'some other comment' }] });
});

// 6. create a route for POST request to /comments
app.post('/comments', (req, res) => {
    res.json({ message: 'Comment created!' });
});

// 7. listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});