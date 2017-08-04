/**
 * 检测是否登入
 */
let isLogin = exports.isLogin = async function (ctx, next) {
  if(!ctx.session.email) {
    return ctx.error("您還沒有登入，請登入後重試！", {
      jump: '/user/login'
    });
  }
  await next();
}

/**
 * 是否是管理員
 */
exports.isAdmin = async function isAdmin (ctx, next) {
  if(ctx.session.email && ctx.session.isAdmin) {
    return await next();
  } else {
    return ctx.error("您不是管理員，無法執行該操作！");
  }
}
