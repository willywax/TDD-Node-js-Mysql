var Task = require('../model/appModel');


//Lists all TASKS
exports.list_all_tasks = function(req,res){
    Task.getAllTasks(
        (err,task)=>{
            if(err){
                res.status(404).json(err);
            }
            res.status(200).json(task);
        }
    );
};

//Creates a Single Task
exports.create_a_task = function(req,res){
    var new_task = new Task(req.body);

    if(!new_task.task || !new_task.status){
        res.status(404).json(
            {
                error: true,
                message: 'Please provide task details'
            });
    }else {
        Task.createTask(new_task, (err,task)=>{
            if(err){
                res.error(err);
            }
            res.status(201).json(task);
        });
    }
};

//Updates a single Task
exports.update_a_task = function(req,res){

    Task.updateById( req.params.id, req.body, (err,task)=>{
        if(err){
            res.status(404).send(err);
          
        }
        res.status(200).json({
           affectedRows : task.affectedRows
        });
     
    });
};


//Gets a Single Task
exports.read_a_task = function(req,res){
    Task.getTaskById(req.params.id, (err,task)=>{
        if(err){
            res.send(err);
        }
        res.status(200).json(task);
    });
};

//Deletes a Task
exports.delete_a_task =  function(req,res){
    Task.remove( req.params.id, function(err, task) {
        if (err)
          res.send(err);
        res.status(200).json({ message: 'Task successfully deleted' });
    });
};


