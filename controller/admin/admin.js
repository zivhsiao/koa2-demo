'use strict';

const Admin = require("../../models/admin.js")
const Category = require("../../models/category.js")
const Products = require("../../models/products.js")
const dateFormat = require('dateformat');


exports.getHome = async (ctx) => {
  var bodyData = ctx.body;
  let now = new Date();

  const adminInfo = await Admin.findAll({});

  await ctx.render('admin/index', {
    title: 'Koa2',
    data: adminInfo,
    toDay: dateFormat(now, "yyyy-mm-dd h:MM")
  });
};

exports.getUsers = async (ctx) => {
  var bodyData = ctx.body;

  const adminInfo = await Admin.findAll({});

  await ctx.render('admin/users', {
    title: '使用者',
    data: adminInfo
  });
};

exports.getUsersByOne = async (ctx) => {
  var bodyData = ctx.body;

  const admin = await Admin.findAll({});

  await ctx.render('admin/users', {
    data: admin
  });
};

