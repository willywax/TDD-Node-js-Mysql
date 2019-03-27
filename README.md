# TDD-Node-js-Mysql
### Project Summary
This project is part of ALC Capstone Challenge 3.
It required the learner to use Node.js , Mysql to create a simple TDD OOP Program that could do the following
1. Create a user and add it to the database. (Note) User must be a normal user, moderator, Admin
2. User create a comment and comment get saved
3. User can update a comment he/she created . Admin can update any comment
4. User can delete a comment he/she created. Admin or Moderator can delete any comment
5. Have a test coverage of atleast 65% 

#### Design Approach
1. Poject Structure
  1.1 Models : Contains the main Classes and SQL Queries. (User, Comment, DB)
  1.2 Controllers: Contains the logic to interact with the models. ( UserController, CommentController)
  1.3 Routers: Redirection of requests. (UserRouter, CommentRouter)
  1.4 Middleware: Checks for access if a user is about to edit or update a comment. (Access)
  1.5 Tests: Has test.js which contains all the tests
 
#### Install Instractions 
1. Download or Clone the project
2. Head to the db.js in Models folder and update the db connnection details otherwise you will run into errors
3. Run npm install --save 
4. To configure database and insert dummy record. node sample_data.js
5. To run test npm run test
6. To run the node app you can use nodemon index.js or node index.js 
7. Start sending requests to endpoints in POSTMAN and viewing the results 


### Configured End Points

