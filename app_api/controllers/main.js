/* GET home page */
var home = function(req, res){
  res.render('home', { title: 'FoodYum' });
};

var admin = function(req, res){
  res.render('admin', { title: 'FoodYum' });
};
var manager = function(req, res){
  res.render('manager', { title: 'FoodYum' });
};
var signup = function(req, res){
  res.render('signup', { title: 'FoodYum' });
};
var login = function(req, res){
  res.render('login', { title: 'FoodYum' });
};
var dashboard = function(req, res){
  res.render('dashboard', { title: 'FoodYum' });
};
var menu = function(req, res){
  res.render('menu', { title: 'FoodYum' });
};
var burgrill = function(req, res){
  res.render('menu/burgrill', { title: 'FoodYum' });
};
var lapinoz = function(req, res){
  res.render('menu/lapinoz', { title: 'FoodYum' });
};
var chainagri = function(req, res){
  res.render('menu/chainagri', { title: 'FoodYum' });
};
var cart = function(req, res){
  res.render('cart', { title: 'FoodYum' });
};
var tq = function(req, res){
  res.render('menu/tq', { title: 'FoodYum' });
};
var sqone = function(req, res){
  res.render('menu/sqone', { title: 'FoodYum' });
};
var feedback = function(req, res){
  res.render('feedback', { title: 'FoodYum' });
};
var profile = function(req, res){
  res.render('profile', { title: 'FoodYum' });
};
module.exports = {
  home,
  admin,
  manager,
  signup,
  login,
  dashboard,
  menu,
  burgrill,
  lapinoz,
  chainagri,
  tq,
  sqone,
  cart,
  feedback,
  profile
};
