var sql = require('./db');

var User = function(user) {
    this.name = user.name,
    this.logged_id = null,
    this.role = user.role //Gives the User different access

};

//Creates a User
User.createUser = (newUser)=>{
    sql.query("INSERT INTO users set ?", newUser, (err,res)=>{
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

//Loggin in a user
User.logInUser = (user)=>{
    const logged_in = new Date();
    sql.query("UPDATE users SET logged_in = ? WHERE id = ?", [logged_in,id], (err,res)=>{
        if(err) {
            console.log("error: ", err);
            result(null, err);
    
        }else {
            result(null,res);
          
        }
    });
}

//Get User Role 
User.getRole = (user)=>{

}

module.exports = User;