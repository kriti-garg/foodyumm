const mongoose =require('mongoose');
const user=mongoose.model('users');
const userCreate =function(req,res){
    const path = '/api/locations';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'POST',
    json : {},
    qs : {
        userName:req.body.userName,
        rollNo:req.body.rollNo,
        email:req.body.email,
        phoneNo:req.body.phoneNo,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    }
    
  };
  request (
    requestOptions,
    (err,response, body)=> {
      let data=body;
      if(err){
        res.status(400);
           res.json(err);
    }else{
        res.render('home',data);
    }
    }
  );
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
