var User = require('../model/user');

//Create User 
exports.create_user = (req,res)=>{

    var new_user = new User(req.body);

    console.log(new_user);
    if(!new_user.name || !new_user.role){
        res.status(404).json(
            {
                error: true,
                message: 'Please provide user details'
            });
    }else {
        User.createUser(new_user, (err,user)=>{
            if(err){
                res.status(401).send(err);
            }
            res.status(201).json(user);
        });
    }
}

//Log In a User
exports.log_in_user = function(req,res){
    User.logInUser(req.params.id , (err,user)=>{
        if(err){
            res.status(401).send(err);
        }
        res.status(200).json(user);
    });
};

exports.get_user = function(req,res){
    User.getRole(req.params.id, (err,user)=>{
        if(err){
            res.status(401).send(err);
        }
        res.status(200).json(user)
    });
}