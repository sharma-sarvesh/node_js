const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


        // GET route
app.get('/users', (req, res) => {
  // Logic to fetch users from database
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  res.json(users);
});


        // POST route
app.post('/users', (req, res) => {
  // Logic to create a new user in database
  const user = { id: 3, name: 'Bob Johnson' };

  res.status(201).json(user);
});


        // PUT route
app.put('/users/:id', (req, res) => {
  // Logic to update a user in database
  const user = { id: req.params.id, name: 'Updated Name' };

  res.json(user);
});


        // DELETE route
app.delete('/users/:id', (req, res) => {
  // Logic to delete a user from database
  const user = { id: req.params.id, name: 'Deleted User' };

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
