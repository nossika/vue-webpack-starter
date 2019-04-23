const { createBundleRenderer } = require('vue-server-renderer')
const path = require('path');
const fs = require('fs');

const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');

const renderer = createBundleRenderer(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'), {
  template: fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8').replace('<section id="app"></section>', '<!--vue-ssr-outlet-->'), // html模板
  clientManifest: require('../dist/vue-ssr-client-manifest.json'), // 客户端依赖，服务端完成首页渲染之后，客户端路由变化的新页面由客户端代码去渲染
});

app.use(koaStatic(
  path.join( __dirname, '../dist'),
  {
    index: 'none',
  },
));

app.use(async ctx => {
  // 传递参数context给entry-server导出的app
  const htmlStr = await renderer.renderToString({
    state: {
      user: 'friend',
    },
    path: ctx.req.url,
  });
  ctx.set('Content-Type', 'text/html');
  ctx.body = htmlStr;
});

app.listen(7869, () => {
  console.log('listen at 7869');
});

