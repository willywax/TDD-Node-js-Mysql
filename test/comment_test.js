
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
    

    it('Insert a comment to a db',(done)=>{
        Comment.createComment(new_comment, (err,res)=>{
            expect(res.affectedRows).is.greaterThan(0);
            done();
        });
    });

    it('Throw err when insert into Comment table',(done)=>{
        Comment.createComment(new_comment2, (err,res)=>{
            expect(function() { throw err })
            .to.throw(  Error, "ER_NO_DEFAULT_FOR_FIELD: Field 'author' doesn't have a default value");
            done();
        });
    });

    it('Get Comments By User Id',(done)=>{
        Comment.getCommentByUser(1, (err,res)=>{
            expect(res.length).is.greaterThan(0);
            done();
        });
    });

    it('Returns None if User Id has nothing',(done)=>{
        Comment.getCommentByUser('qeqwe', (err,res)=>{
            //console.log(err);
            done(err);
        });
    });

    const update_comment = {
        "comment" : "New Updated Comment"
    }
    it('Edit a Comment ',(done)=>{
        Comment.editById(3, update_comment, (err,res)=>{
            //console.log(err);
            expect(res.affectedRows).is.greaterThan(0);
            done();
            
        });
    });

    it(' Deleting a Comment',(done)=>{
        Comment.remove(48, (err,res)=>{
            expect(res.affectedRows).is.greaterThan(0);
            done();
        });
    });


    //========== Comment Router & Comment Controller
    const new_comment3 = {
        "comment" : "New Comment 13",
        "author": 1,
    }

    it('should add a new task to the list via controller', (done)=>{
        requester.post('/comments/').send(new_comment3).end(
            (err,res)=>{
                expect(res).to.have.status(201);
                done();
            }
        )
    });

    it('should get comments by author',(done)=>{
        requester.get('/comments/user/1').end(
            (err,res)=>{ 
                expect(res).to.have.status(200); 
                //expect(res.body).to.deep.include(task3);
                done();
            }
        )
    });

    it('should delete a comment from a list ', (done)=>{
        requester.delete('/comments/51').end(
            (err,res)=>{
                expect(res).to.have.status(200);
                done();
            }
        )
    });   

    const update_comment2 = {
        "comment" : "New Updated Comment"
    }
    it('should update a task using id in Controller ', (done)=>{
        requester.put('/comments/6').send(update_comment2).end(
            (err,res)=>{
                expect(res).to.have.status(200);
                //expect(res.body).to.deep.include(task3);
                done();
            }
        )
    });




});

