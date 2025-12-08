const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db_mysql = require("./config/database/mysql.js");
const { router } = require('./routes/index.js');

app.use(express.json());
app.use("/api",router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    const [rows] = await db_mysql.query('SELECT NOW() AS currentTime;');
    console.log('MySQL connected! Server time:', rows[0].currentTime); 44
  } catch (err) {
    res.send(err);
    console.error('MySQL connection failed:', err.message);
  }
})
