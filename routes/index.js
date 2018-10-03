var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/',ctrlMain.home);
router.get('/home',ctrlMain.home);
router.get('/signup',ctrlMain.signup);
router.get('/login',ctrlMain.login);
router.get('/cart',ctrlMain.cart);
router.get('/menu',ctrlMain.menu);
router.get('/menu/burgrill',ctrlMain.burgrill);
router.get('/dashboard',ctrlMain.dashboard);
router.get('/menu/lapinoz',ctrlMain.lapinoz);
router.get('/menu/sqone',ctrlMain.sqone);
router.get('/admin',ctrlMain.admin);
router.get('/feedback',ctrlMain.feedback);
router.get('/profile',ctrlMain.profile);
router.get('/tq',ctrlMain.tq);
router.get('/chainagri',ctrlMain.chainagri);

module.exports =router;
