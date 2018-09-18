/* GET home page */
const home = function(req, res){
  res.render('home', { title: 'Routed through Controller main.js' });
};
const login = function(req,res){
  res.render('login',{ title: 'Routed through Controller main.js' });
}
const register =function(req,res){
  res.render('register',{ title: 'Routed through Controller main.js' });
}
module.exports = {
  home,
  login,
  register
};