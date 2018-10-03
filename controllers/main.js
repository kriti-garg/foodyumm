/* GET home page */
const home = function(req, res){
  res.render('home', { title: 'FoodYum' })
};

const admin = function(req, res){
  res.render('admin', { title: 'FoodYum' })
};
const signup = function(req, res){
  res.render('signup', { title: 'FoodYum' })
};
const login = function(req, res){
  res.render('login', { title: 'FoodYum' })
};
const dashboard = function(req, res){
  res.render('dashboard', { title: 'FoodYum' })
};
const menu = function(req, res){
  res.render('menu', { title: 'FoodYum' })
};
const burgrill = function(req, res){
  res.render('menu/burgrill', { title: 'FoodYum' })
};
const lapinoz = function(req, res){
  res.render('menu/lapinoz', { title: 'FoodYum' })
};
const chainagri = function(req, res){
  res.render('menu/chainagri', { title: 'FoodYum' })
};
const cart = function(req, res){
  res.render('cart', { title: 'FoodYum' })
};
const tq = function(req, res){
  res.render('menu/tq', { title: 'FoodYum' })
};
const sqone = function(req, res){
  res.render('menu/sqone', { title: 'FoodYum' })
};
const feedback = function(req, res){
  res.render('feedback', { title: 'FoodYum' })
};
const profile = function(req, res){
  res.render('profile', { title: 'FoodYum' })
};
module.exports = {
  home,
  admin,
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
