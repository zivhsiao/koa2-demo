'use strict';

const Users = require('../models/users.js')
const MenuMain = require('../models/menuMain.js')
const Menu_List = require('../models/menu_list.js')
const Menu_Card = require('../models/menu_card.js')
const Menu_Carouse = require('../models/menu_carouse.js')
const Menu_Footer = require('../models/menu_footer.js')
const Menu_Config = require('../models/menu_config.js')

exports.getMenu = async(ctx) => {

  const topMenu = await MenuMain.findAll({
    where: {
      area: 'top',
      enabled: 1
    }
  })


  await ctx.render('index', {
    title: 'Koa2',
    admin: ctx.session.name,
    topMenu: topMenu
  });
}


exports.getMenuAll = async(ctx) => {

  const topMenu = await MenuMain.findAll({
    where: {
      area: 'top',
      enabled: 1
    }
  })


  await ctx.render('index', {
    title: 'Koa2',
    admin: ctx.session.name,
    topMenu: topMenu
  });
}
