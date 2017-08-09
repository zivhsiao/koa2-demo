const router = require('koa-router')();
const index = require('../controller/index');

router
  .get('/:name', index.getMenuAll)
  .get('/:name/:id', index.getMenu)


module.exports = router;
