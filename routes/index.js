const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

const ctrlUser = require('../controllers/signup');
const ctrlMenu = require('../controllers/menus');

router.get('/', ctrlMain.home);
router.get('/home', ctrlMain.home);
router.get('/admin', ctrlMain.admin);
router.get('/manager', ctrlMain.manager)
router.get('/manager', ctrlMain.manager)
      .post('/manager',ctrlMenu.menuCreate);
router
     .get('/signup', ctrlMain.signup)
     .post('/signup',ctrlUser.userCreate);
router.get('/login', ctrlMain.login)
      .post('/login', ctrlUser.findUser);
router.get('/dashboard', ctrlMain.dashboard);
router.get('/menu', ctrlMain.menu);
router.get('/menu/burgrill', ctrlMain.burgrill);
router.get('/menu/sqone', ctrlMain.sqone);
router.get('/menu/tq', ctrlMain.tq);
router.get('/menu/chainagri', ctrlMain.chainagri);
router.get('/menu/lapinoz', ctrlMain.lapinoz);
router.get('/cart', ctrlMain.cart);
router.get('/feedback', ctrlMain.feedback);
router.get('/profile',ctrlMain.profile);

router.post('/signup',ctrlUser.userCreate);
router.post('/manager',ctrlMenu.menuCreate);

module.exports = router;
