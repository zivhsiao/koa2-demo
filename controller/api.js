'use strict';

const MenuMain = require('../models/menuMain.js')
const Menu_List = require('../models/menu_list.js')
const Menu_Card = require('../models/menu_card.js')
const Menu_Carouse = require('../models/menu_carouse.js');
const Menu_Pic = require('../models/menu_pic.js');
const Menu_Footer = require('../models/menu_footer.js')
const Menu_Config = require('../models/menu_config.js')
const Menu_OnePage = require('../models/menu_onepage.js')


exports.getMenu = async(ctx) => {

  const menu = await MenuMain.findAll({
    where: {
      id: ctx.params.name
    }
  });

  ctx.body = menu;
}

exports.getMenuAll = async(ctx) => {


  const menuMain = await MenuMain.findAll({
    where: {
      path: ctx.params.name
    }
  })

  if(menuMain.length == 0){
    ctx.body = '{"data": "error"}';
    return;
  }

  let subMenu = null;

  if(menuMain[0].listType == 'list'){
    subMenu = Menu_List;

  }
  if(menuMain[0].listType == 'one_page'){
    subMenu = Menu_OnePage;
  }

  if(menuMain[0].listType == 'carouse'){
    subMenu = Menu_Carouse;
  }

  if(menuMain[0].listType == 'card'){
    subMenu = Menu_Card;
  }

  if(menuMain[0].listType == 'pic'){
    subMenu = Menu_Pic;
  }

  const menuItem = await subMenu.findAll({
    where: {
      item_id: menuMain[0].id,
      enabled: 1
    }
  })


  let menuJSON = '{"data":' + JSON.stringify(menuItem) +'}'

  // console.log(menuObj);
  ctx.body = menuJSON;
}
