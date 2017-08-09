'use strict';

const Users = require('../../models/users.js')
const MenuMain = require('../../models/menuMain.js')
const Menu_List = require('../../models/menu_list.js')
const Menu_Card = require('../../models/menu_card.js')
const Menu_Carouse = require('../../models/menu_carouse.js')
const Menu_Footer = require('../../models/menu_footer.js')
const Menu_Config = require('../../models/menu_config.js')
const dateFormat = require('dateformat');
const md5 = require('md5')

exports.getHome = async (ctx) => {

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

exports.getData = async (ctx) => {

  let now = new Date()

  if(!ctx.session.email  && !ctx.session.admin){
    ctx.redirect('/admin/login')
  }

  const users = await Users.findAll({});

  await ctx.render('admin/index', {
    title: '使用者',
    data: users,
    name: ctx.session.name,
    toDay: dateFormat(now, 'yyyy-mm-dd HH:MM')
  });
};

exports.getLogon = async(ctx) => {
  await ctx.render('admin/login')
};

exports.getLogout = async(ctx) => {
  ctx.session = null;
  ctx.redirect('/admin/login')
};

exports.getLogin = async (ctx) => {

  const users = await Users.findAll({
    where: {
      email: ctx.request.body.email,
      password: md5(ctx.request.body.password),
    }
  })


  if(users.length == 0){

    ctx.redirect('/admin/login');
  } else {
    ctx.session.email = users[0].email
    ctx.session.name = users[0].fullname
    ctx.session.admin = 1

    console.log(users[0].email);
    ctx.redirect('/admin')
  }



};

