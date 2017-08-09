const router = require('koa-router')();
const home = require('../controller/admin/admin');


router
  .get('/', home.getHome)

  .get('/login', home.getLogon)
  .post('/login', home.getLogin)

  .get('/logout', home.getLogout)

  .get('/:menu/:id', home.getData)


module.exports = router;
