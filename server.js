const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db_mysql = require("./config/database/mysql.js");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/testmysql', async(req, res) => {
  try {
    // const [rows] = await db_mysql.query('SELECT NOW() AS currentTime;');
    const rows = await db_mysql.query('SELECT * FROM demo_users;');
    console.log(rows);
    console.log('MySQL connected! Server time:', rows[0].currentTime);44  } catch (err) {
    console.error('MySQL connection failed:', err.message);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
