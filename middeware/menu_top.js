'use strict';

const MenuMain = require('../models/menuMain.js');

/**
 *
 * @param str 要做加密的字符串
 * @returns {*}返回16进制的哈希值
 */
exports.getTopMenu = () => {
  const topMenu = MenuMain.findAll({
    where: {
      area: 'top',
      enabled: 1
    }
  })




  return topMenu;
};
