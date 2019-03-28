var mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
})

// connect to the MySQL server
connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message)
  }
  console.log('Db Connected Success ')
  return 'Success'
})

module.exports = connection
