var mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

const connection2 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
})

connection.query('CREATE DATABASE mydb', function (err, result) {
  if (err) {
    console.log('Database Exists')
  } else {
    console.log('Database created')
    // result();
    // connection.end();
  }
})

// connect to the MySQL server
connection2.connect(function (err, result) {
  if (err) {
    console.error('error: ' + err.message)
  }
  console.log('Db Connected Success ')
  connection.end() // Stopping the first Connection

  // return 'Success'
})

module.exports = connection2
