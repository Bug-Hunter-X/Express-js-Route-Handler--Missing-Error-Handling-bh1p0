const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Missing proper error handling, e.g., 404 Not Found
    res.status(500).send('User not found');
  }
  res.json(user);
});
