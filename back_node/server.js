const express  = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

// เรียกใช้ itemController
app.use(require('./item_controller'));


const connection = mysql.createConnection({
  host: 'chbwapp001',
  user: 'root',
  password: 'Maxim123;',
  database:'it_inventory',
  port: '3306'
});

connection.connect((err) => {
  if (err){
      console.log('Error connect to DB is',err)
  }
  console.log('Mysql successfully connected');
})



app.listen(3000, () => console.log('Server is running on port 3000'));
