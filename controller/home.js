'use strict';

const category = require("../models/admin.js")

exports.getHome = async(ctx) => {
  
  await ctx.render('index', {
    title: 'Koa2'
  });
};
