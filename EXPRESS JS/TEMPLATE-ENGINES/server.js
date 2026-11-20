
const express = require('express');
const path = require('path');

const app = express();
const port = 3005;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the views folder path
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
    // Fetch the number of enrolled users
    // (Currently using sample data)
    let no = 56;
    let users = ["Harry", "Aakash","Rohan"]

    // Send data to the EJS template
    res.render('index', { users:users });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
