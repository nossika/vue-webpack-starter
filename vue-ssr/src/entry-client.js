import { createApp } from './create-app'; 

const app = createApp();

if (window.__INITIAL_STATE__) {
  app.$store.replaceState(window.__INITIAL_STATE__);
}

const router = app.$router;
const store = app.$store;

// 等路由异步组件加载完再执行app.$mount操作，以保持和服务端渲染结果一致
router.onReady(() => {
  // 路由跳转前先执行完asyncData(如果有)再渲染，以保持和服务端渲染的行为一致（也是执行完asyncData再返回）
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c));
    });

    if (!activated.length) {
      return next();
    }

    Promise.all(activated.map(comp => {
      if (comp && comp.asyncData) {
        return comp.asyncData({ store, route: to });
      }
    })).then(() => {
      next();
    }).catch(next);
  })

  app.$mount('#app');
});

