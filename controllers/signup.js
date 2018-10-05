const mongoose =require('mongoose');
const user=mongoose.model('users');
const userCreate =function(req,res){
    user.create({
	userName:req.body.userName,
	rollNo:req.body.rollNo,
	phoneNo:req.body.phoneNo,
	password:req.body.password,
    confirmPassword:req.body.confirmPassword
    },(err,user) =>{
        if(err){
            res.status(400);
               res.json(err);
        }else{
            res.render('home',{title :'FoodYum'});
        }
        
    });
};

module.exports={
    userCreate
}
