const router = require('koa-router')();
const home = require('../controller/home');


router
  .get('/', home.getHome)
  
module.exports = router;
