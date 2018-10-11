const mongoose =require('mongoose');
const user=mongoose.model('users');
const userCreate =function(req,res){
    user.create({
	userName:req.body.userName,
    rollNo:req.body.rollNo,
    email:req.body.email,
	phoneNo:req.body.phoneNo,
	password:req.body.password,
        confirmPassword:req.body.confirmPassword
    },(err,user) =>{
        if(err){
            res.status(400)
               json(err);
        }else{
            res
            .status(201)
            .render('signup');
        }
        
    });
};
const findUser=function(req,res){
    user.findOne({
        email:req.body.email,
        password:req.body.password

    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            const data={user};
            res
                .json(data);
                return;
        }
        
    });
};

module.exports={
    userCreate,
    findUser
}
