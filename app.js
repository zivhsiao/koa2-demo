const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const serve = require('koa-static');
const favicon = require('koa-favicon');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');

const config = require('./config/config');

const app = new Koa();
const index = require('./routes/index');
const admin = require('./routes/admin');
const menu = require('./routes/menu');
const api = require('./routes/api');

global.Promise = require('bluebird');

app.keys = ['hezrid56610']
// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(serve(__dirname + '/public')));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(convert(session({
  store: redisStore(config.redis)
})));


app.use(async(ctx, next) => {
  await next()
  ctx.set('X-Powered-By', 'Koa2')
})

// 一般使用的模板是 EJS
// app.use(views(__dirname + '/views', {
//   extension: 'jade'
// }));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 簡易的 MVC 架構
router.use('/', index.routes(), index.allowedMethods());
router.use('/menu', menu.routes(), menu.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());

app.use(router.routes(), router.allowedMethods());


app.on('error', function(err, ctx){
  console.log(err)
  log.error('server error', err, ctx);
});

app.use(async(ctx) => {
  if (ctx.status === 404) {
    await ctx.render('./error/404');
  }
})

module.exports = app;'use strict';
