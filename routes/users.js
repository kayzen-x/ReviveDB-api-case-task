app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  const user = { id: result.insertId, name, email };
  const token = createToken(user);
  res.status(200).send({ user, token });
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const [result] = await db.query('SELECT * FROM users WHERE email = ?', [
    email
  ])});
  if (result) {
    const isPasswordValid = await bcrypt.compare(password, result.password);
    if (isPasswordValid) {
      const user = { id: result.id, name: result.name, email };
      const token = createToken(user);
      res.status(200).send({ user, token });
    } else {
      res.status(401).send({ error: 'Invalid password' });
    }
  } else {
    res.status(404)
  }


console.log(result);















// app.post('/signup', (req, res) => {
//     const { name, email, password } = req.body;
//     const queryString = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//     connection.query(queryString, [name, email, password], (err, results) => {
//       if (err) {
//         console.error(err);
//         return res.sendStatus(500);
//       }
//       return res.json({
//         id: results.insertId,
//         name,
//         email,
//         signup_date: new Date()
//       });
//     });
//   });