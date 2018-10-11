const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

const ctrlUser = require('../controllers/signup');
const ctrlMenu = require('../controllers/menus');

router.get('/', ctrlMain.home);
router.get('/home', ctrlMain.home);
router.get('/admin', ctrlMain.admin);
router.get('/manager', ctrlMain.manager);
router.get('/signup', ctrlMain.signup)
router.get('/login', ctrlMain.login)
router.get('/dashboard', ctrlMain.dashboard);
router.get('/menu', ctrlMain.menu);
router.get('/menu/burgrill', ctrlMain.burgrill);
router.get('/menu/sqone', ctrlMain.sqone);
router.get('/menu/tq', ctrlMain.tq);
router.get('/menu/chainagri', ctrlMain.chainagri);
router.get('/menu/lapinoz', ctrlMain.lapinoz);
router.get('/cart', ctrlMain.cart);
router.get('/feedback', ctrlMain.feedback);

module.exports = router;
