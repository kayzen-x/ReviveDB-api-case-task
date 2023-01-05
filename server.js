const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'welcome';

const createToken = (user) => {
  return jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: 86400
  });
};

//routes 
app.use('/users', require('./routes/users'));
app.use('/apartments', require('./routes/apartments'));
app.use('/reviews', require('./routes/reviews'));
app.use('/landlords', require('./routes/landlords'));
app.use('/helpful_reviews', require('./routes/helpful_reviews'));
app.use('/sort', require('./routes/sort'));

port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});