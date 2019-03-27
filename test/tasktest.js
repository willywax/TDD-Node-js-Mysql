
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);

const url = 'http://localhost:3000';
 const requester = chai.request.agent(url);

const index = require('../index');
const app = require('../app');
const db = require('../app/model/db');

const TaskModal = require('../app/model/appModel');
const appController = require('../app/controller/appController');
const appRouter = require('../app/routes/appRoutes');



describe('Testing Tasks API',function(){
    it('should get data records from server',(done)=>{
        requester.get('/tasks').end(
            (err,res)=>{
                expect(res).to.have.status(200); 
                done();
            }
        )
    });

    const task3 =  {
        "id": 3,
        "task": "Fix bugs",
        "status": 1,
        "created_at": "2016-04-10T20:50:40.000Z"
    };
    it('should get a specific record from server',(done)=>{
        requester.get('/tasks/3').end(
            (err,res)=>{ 
                expect(res).to.have.status(200); 
                expect(res.body).to.deep.include(task3);
                done();
            }
        )
    });

    it('should return empty array if not found',(done)=>{
        requester.get('/tasks/323432').end(
            (err,res)=>{ 
                expect(res).to.have.status(200); 
                assert(res.body.length == 0, 'No data in array');
                done();
            }
        )
    });

    const newTask1 = { "task": 'New Input', "status": 2};
    it('should add a new task to the list ', (done)=>{
        requester.post('/tasks').send(newTask1).end(
            (err,res)=>{
                expect(res).to.have.status(201);
                done();
            }
        )
    });

    const newTask2 = { "status": 2};
    it('should return 404 if no task in request', (done)=>{
        requester.post('/tasks').send(newTask2).end(
            (err,res)=>{
                expect(res).to.have.status(404);
                done();
            }
        )
    });

    it('should delete a task from a list ', (done)=>{
        requester.delete('/tasks/1').end(
            (err,res)=>{
                expect(res).to.have.status(200);
                done();
            }
        )
    });   

    const newTask4 = { "status": 2};
    it('should update a task using id ', (done)=>{
        requester.put('/tasks/6').send(newTask4).end(
            (err,res)=>{
                expect(res).to.have.status(200);
                //expect(res.body).to.deep.include(task3);
                done();
            }
        )
    });
    

});

