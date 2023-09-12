// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;

// Create or connect to the SQLite database
const db = new sqlite3.Database('./database.db');

// Create the tables if they don't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY,
      name TEXT,
      email TEXT,
      message TEXT
    )
  `);
});

app.use(express.json());

// Handle form submissions
app.post('/api/inquiries', (req, res) => {
  const { name, email, message } = req.body;

  db.run(
    'INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)',
    [name, email, message],
    (err) => {
      if (err) {
        res.status(500).json({ error: 'Error submitting inquiry.' });
        return;
      }
      res.json({ message: 'Inquiry submitted successfully!' });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
