'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const webpackPort = 8080;

let htmlStr = '';

try {
  htmlStr = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');
} catch (e) {
  htmlStr = e.toString();
}

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    if (process.env.NODE_ENV === 'development') {
      const result = await ctx.curl(`http://127.0.0.1:${webpackPort}/index.html`, {
        timeout: 1000,
        method: 'get',
        dataType: 'string',
      });
      ctx.set('Content-Type', 'text/html');
      ctx.body = result.data.toString();
      return;
    }
    ctx.set('Content-Type', 'text/html');
    ctx.body = htmlStr;
  }
}

module.exports = HomeController;
