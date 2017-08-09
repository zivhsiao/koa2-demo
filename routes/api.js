const router = require('koa-router')();
const api = require('../controller/api');


router
  .get('/:name', api.getMenuAll)
  .get('/:name/:id', api.getMenu)


module.exports = router;
