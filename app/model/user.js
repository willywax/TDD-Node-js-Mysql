var sql = require('./db');

var User = function(user) {
    this.name = user.name,
    this.logged_in = null,
    this.role = user.role //Gives the User different access

};


//Creates a User
User.createUser = (newUser,result)=>{
    sql.query("INSERT INTO users set ?", newUser, (err,res)=>{
        if(err){
            //console.log("error: ", err);
            result(err,null);
        }
        else {
            //console.log(res);
            result(null, res);
        }
    });
};

//Loggin in a user
User.logInUser = (id, result)=>{
    const logged_in = new Date();
    sql.query("UPDATE users SET logged_in = ? WHERE id = ?", [logged_in,id], (err,res)=>{
        if(err) {``
            result(err,null);
    
        }else {
            result(null,res);
        }
    });
}

//Get User Role 
User.getRole = (user_id,result)=>{
    sql.query("SELECT role from USERS where id = ?",[user_id],(err,res)=>{
        if(err){
            result(err,null);
        }else {
           // console.log(res);
            result(null,res);
        }
    });
}

//Get User  
User.getUser = (user_id,result)=>{
    sql.query("SELECT * from USERS where id = ?",[user_id],(err,res)=>{
        if(err){
            result(err,null);
        }else {
           // console.log(res); Because its array so we get first element
            result(null,res[0]);
        }
    });
}

module.exports = User;