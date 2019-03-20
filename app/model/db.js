var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Db Connected Success ');
    return 'Success';
});

module.exports =connection;

