'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async info() {
    const { ctx } = this;
    ctx.body = { 
      name: 'nossika',
    };
  }
}

module.exports = HomeController;
