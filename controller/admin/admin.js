'use strict';

const Category = require("../../models/category.js")
const Products = require("../../models/products.js")
const Users = require('../../models/users.js')
const Footer = require('../../models/footer.js')
const dateFormat = require('dateformat');
const md5 = require('md5')

exports.getHome = async (ctx) => {
  let bodyData = ctx.body;
  let now = new Date();


  console.log(ctx.session.email)
  if (!ctx.session.email && ctx.session.admin != 1) {

    ctx.redirect('/admin/login');
  }

  const users = await Users.findAll({});

  await ctx.render('admin/index', {
    title: 'Koa2',
    data: users,
    name: ctx.session.name,
    toDay: dateFormat(now, "yyyy-mm-dd HH:MM")
  });
};

exports.getUsers = async (ctx) => {
  let bodyData = ctx.body;

  if(!ctx.session.admin  && !ctx.session.account){
    ctx.redirect('admin/login')
  }

  const users = await Users.findAll({});

  await ctx.render('admin/users', {
    title: '使用者',
    data: users
  });
};

exports.getLogon = async(ctx) => {
  await ctx.render('admin/login')
};

exports.getLogin = async (ctx) => {
  let bodyData = ctx.body;
  let message = ''
  let isAdmin = 0


  if(!ctx.session.email && ctx.session.admin != 1){
    ctx.redirect('/')
  }

  const users = await Users.findAll({
    where: {
      email: ctx.request.body.email,
      password: md5(ctx.request.body.password),
    }
  })


  if(users.length == 0){

    await ctx.render('admin/login', {
      message: '錯誤的 E-mail 或 密碼！',

    })
  } else {
    ctx.session.email = users[0].email
    ctx.session.name = users[0].fullname
    ctx.session.admin = 1

    console.log(users[0].email);
    ctx.redirect('/admin')
  }



};

