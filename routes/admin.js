const router = require('koa-router')();
const home = require('../controller/admin/admin');


router
  .get('/', home.getHome)
  .get('/login', home.getLogon)
  .post('/login', home.getLogin)
  .get('/users', home.getUsers)

module.exports = router;
