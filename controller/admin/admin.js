'use strict';

const Admin = require("../../models/admin.js")
const Category = require("../../models/category.js")
const Products = require("../../models/products.js")

exports.getHome = async(ctx) => {
  var bodyData = ctx.body;
  
  const adminInfo = await Admin.findAll({});
  
  await ctx.render('admin/index', {
    title: 'Koa2',
    data: adminInfo
  });
};

exports.getUsers = async(ctx) => {
  var bodyData = ctx.body;
  
  const adminInfo = await Admin.findAll({});
  
  await ctx.render('admin/users', {
    title: '使用者',
    data: adminInfo
  });
};
