app.get('/landlords', (req, res) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
  
    connection.query('SELECT * FROM apartments', (error, results, fields) => {
      if (error) {
        res.status(500).json({ error: error });
      } else {
        res.json(results);
      }
    });
  
    connection.end();
  });