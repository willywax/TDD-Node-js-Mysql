
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

const UserRouter = require('../app/routes/users');


describe('Testing User API',function(){
    const new_user = {
        "name" : "William",
        "role": 1
    }

    it('Insert a User to a db',(done)=>{
        User.createUser(new_user, (err,res)=>{
            expect(res.affectedRows).is.greaterThan(0);
            done();
        });
    });

    it('Get role of a User',(done)=>{
        User.getRole(2,(err,res)=>{
            
            //Returns an array
            expect(res).is.deep.equals([{role: 2}]);
            done();
        });
    });

    it('Updates logged_in when a user Logs In',(done)=>{
        User.logInUser(2, (err,res)=>{
            
            //console.log(res);
            expect(res.affectedRows).is.greaterThan(0);
            done();
            //expect(res).is.deep.equal()
        })
    });



    //========== Testing User Controller ===/
    const new_user2 = {
        "name" : "Eze",
        "role": 2
    }

    it('should add a new user to the list via controller', (done)=>{
        requester.post('/users/').send(new_user2).end(
            (err,res)=>{
                expect(res).to.have.status(201);
                done();
            }
        )
    });

    const id = 10;
    it('Gets the User using Controller',(done)=>{
        requester.get('/users/'+id).end(
            (err,res)=>{
                expect(res).to.have.status(200); 
                //expect(res.body).to.deep.include(task3);
                done();
            }
        );
    });

    it('Logs in User from Controller',(done)=>{
        requester.post('/users/login/'+id).end(
            (err,res)=>{
                expect(res).to.have.status(200);
                done();
            }
        )
    })


});

