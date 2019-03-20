var sql = require('./db');

var Task = function(task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

//Creates a tasks

Task.createTask = function creteTask(newTask, result){
    sql.query("INSERT INTO tasks set ?",newTask, (err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err,null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


//Gets task by ID
Task.getTaskById = function getTask(taskId, result){
    sql.query('SELECT * FROM `tasks` WHERE `id` = ?', [taskId], (err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err,null);
     
        }
        else {
            console.log(res);
            result(null, res);
        
        }
    });
};

//Gets All Tasks
Task.getAllTasks = function getAllTasks(result){
    sql.query("SELECT * FROM tasks", (err,res)=>{
        if(err){
            console.log("error: ", err);
            result(null,err);
 
        }
        else {
            console.log("task: ", res);
            result(null, res);
      
        }
    });
};


//Updates Task By Id
Task.updateById = function updateById(id,task, result){
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task,id], (err,res)=>{
        if(err) {
            console.log("error: ", err);
            result(null, err);
    
        }else {
            result(null,res);
          
        }
    });
};

//Deleting Tasks
Task.remove = function(id,result){
    sql.query("DELETE FROM tasks WHERE id = ? ",id, (err,res)=>{
        if(err) {
            console.log("error: ", err);
            result(null, err);
         
        }
        else{
         result(null, res);

        } 
    });
}

module.exports = Task;