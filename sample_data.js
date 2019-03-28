let connection = require('./app/model/db')

//let connection = mysql.createConnection(config);

let createUsers = `create table if not exists users(
    id int(11) primary key auto_increment,
    name varchar(255)not null,
    logged_in datetime default null,
    role int(11) not null
)`
let createComments = `create table if not exists comments(
    id int(11) primary key auto_increment,
    comment varchar(255)not null,
    parent int(11) default null,
    author int(11)not null,
    created_at datetime default null
)`

try {
  connection.query(createUsers, function(err, results, fields) {
    if (err) {
      console.log(err.message)
    }
  })

  connection.query(createComments, function(err, results, fields) {
    if (err) {
      console.log(err.message)
    }
  })

  // inserts 3 Users to User DB
  let user1 = `INSERT INTO users(name,role)
                   VALUES('user1',1)`

  let user2 = `INSERT INTO users(name,role)
                    VALUES('user2',2)`
  let user3 = `INSERT INTO users(name,role)
                    VALUES('user3',3)`

  //Inserts 3 Comments to the Comments DB
  let comment1 = `INSERT INTO comments(comment,author)
                        VALUES('First Comment',1)`

  let comment2 = `INSERT INTO comments(comment,author)
                        VALUES('Seconds Comment',2)`

  let comment3 = `INSERT INTO comments(comment,author)
                        VALUES('Third Comment',3)`

  // execute the insert statment
  connection.query(user1)
  connection.query(user2)
  connection.query(user3)

  connection.query(comment1)
  connection.query(comment2)
  connection.query(comment3)

  connection.end()
  //connection.end()
  console.log('All data and tables created Successfully')
} catch {
  console.log('Error Occured')
}
