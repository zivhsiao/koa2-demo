const router = require('koa-router')();
const home = require('../controller/admin/admin');


router
  .get('/', home.getHome)
  .get('/users', home.getUsers)
  
module.exports = router;
