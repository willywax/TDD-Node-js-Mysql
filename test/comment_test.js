
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;

chai.use(chaiHttp);

const url = 'http://localhost:3000';
 const requester = chai.request.agent(url);

const index = require('../index');
const app = require('../app');
const db = require('../app/model/db');
const Comment = require('../app/model/comment');
const User = require('../app/model/user');

const CommentRouter = require('../app/routes/comment');


describe('Testing Comment API',function(){
    const new_comment = {
        "comment" : "New Comment",
        "author": 1,
        "created_at": new Date()
    }

    const new_comment2 = {
        "comment" : "New Comment",
        "created_at": new Date()
    }
    
    it('Get Author of Comment By User Id',(done)=>{
        // Comment.getAuthor(1, (err,res)=>{
        //     console.log(res.role);
        //    // expect(res.length).is.greaterThan(0);
        //     done();
        // });

        User.getUser(1, (err,res)=>{
            console.log(res.role);
           // expect(res.length).is.greaterThan(0);
            done();
        });

    });

    // it('Insert a comment to a db',(done)=>{
    //     Comment.createComment(new_comment, (err,res)=>{
    //         expect(res.affectedRows).is.greaterThan(0);
    //         done();
    //     });
    // });

    // it('Throw err when insert into Comment table',(done)=>{
    //     Comment.createComment(new_comment2, (err,res)=>{
    //         expect(function() { throw err })
    //         .to.throw(  Error, "ER_NO_DEFAULT_FOR_FIELD: Field 'author' doesn't have a default value");
    //         done();
    //     });
    // });

    // it('Get Comments By User Id',(done)=>{
    //     Comment.getCommentByUser(1, (err,res)=>{
    //         expect(res.length).is.greaterThan(0);
    //         done();
    //     });
    // });

    // it('Returns None if User Id has nothing',(done)=>{
    //     Comment.getCommentByUser('qeqwe', (err,res)=>{
    //         //console.log(err);
    //         done(err);
    //     });
    // });

    // const update_comment = {
    //     "comment" : "New Updated Comment"
    // }
    // it('Edit a Comment ',(done)=>{
    //     Comment.editById(3, update_comment, (err,res)=>{
    //         //console.log(err);
    //         expect(res.affectedRows).is.greaterThan(0);
    //         done();
            
    //     });
    // });

    // it(' Deleting a Comment',(done)=>{
    //     Comment.remove(48, (err,res)=>{
    //         expect(res.affectedRows).is.greaterThan(0);
    //         done();
    //     });
    // });


    // //========== Comment Router & Comment Controller ==================//
    // const new_comment3 = {
    //     "comment" : "New Comment 13",
    //     "author": 1,
    // }

    // it('should add a new task to the list via controller', (done)=>{
    //     requester.post('/comments/').send(new_comment3).end(
    //         (err,res)=>{
    //             expect(res).to.have.status(201);
    //             done();
    //         }
    //     )
    // });

    // it('should get comments by author',(done)=>{
    //     requester.get('/comments/user/1').end(
    //         (err,res)=>{ 
    //             expect(res).to.have.status(200); 
    //             //expect(res.body).to.deep.include(task3);
    //             done();
    //         }
    //     )
    // });

    // it('should delete a comment from a list ', (done)=>{
    //     requester.delete('/comments/51').end(
    //         (err,res)=>{
    //             expect(res).to.have.status(200);
    //             done();
    //         }
    //     )
    // });   

    // const update_comment2 = {
    //     "comment" : "New Updated Comment"
    // }
    // it('should update a task using id in Controller ', (done)=>{
    //     requester.put('/comments/6').send(update_comment2).end(
    //         (err,res)=>{
    //             expect(res).to.have.status(200);
    //             //expect(res.body).to.deep.include(task3);
    //             done();
    //         }
    //     )
    // });


    // // =============================================================== USER TESTS ==========================================================//
    // const new_user = {
    //     "name" : "William",
    //     "role": 1
    // }

    // it('Insert a User to a db',(done)=>{
    //     User.createUser(new_user, (err,res)=>{
    //         expect(res.affectedRows).is.greaterThan(0);
    //         done();
    //     });
    // });

    // it('Get role of a User',(done)=>{
    //     User.getRole(2,(err,res)=>{
            
    //         //Returns an array
    //         expect(res).is.deep.equals([{role: 2}]);
    //         done();
    //     });
    // });

    // it('Updates logged_in when a user Logs In',(done)=>{
    //     User.logInUser(2, (err,res)=>{
            
    //         //console.log(res);
    //         expect(res.affectedRows).is.greaterThan(0);
    //         done();
    //         //expect(res).is.deep.equal()
    //     })
    // });



    // //========== Testing User Controller ===/
    // const new_user2 = {
    //     "name" : "Eze",
    //     "role": 2
    // }

    // it('should add a new user to the list via controller', (done)=>{
    //     requester.post('/users/').send(new_user2).end(
    //         (err,res)=>{
    //             expect(res).to.have.status(201);
    //             done();
    //         }
    //     )
    // });

    // const id = 10;
    // it('Gets the User using Controller',(done)=>{
    //     requester.get('/users/'+id).end(
    //         (err,res)=>{
    //             expect(res).to.have.status(200); 
    //             //expect(res.body).to.deep.include(task3);
    //             done();
    //         }
    //     );
    // });

    // it('Logs in User from Controller',(done)=>{
    //     requester.post('/users/login/'+id).end(
    //         (err,res)=>{
    //             expect(res).to.have.status(200);
    //             done();
    //         }
    //     )
    // });

});

