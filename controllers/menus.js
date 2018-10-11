const mongoose =require('mongoose');
const menu=mongoose.model('menu');
const menuCreate =function(req,res){
    menu.create({
    itemId : req.body.itemId,
    itemName : req.body.itemName,
    franchiseName : req.body.franchiseName,
    itemType : req.body.itemType,
    itemPrice : req.body.itemPrice
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
    menuCreate
}
