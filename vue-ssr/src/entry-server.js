import { createApp } from './create-app'

export default (context = {}) => {
  const app = createApp();
  const store = app.$store;
  const router = app.$router;

  context.path && router.replace(context.path);
  // 将context传入的state作为初始化state
  context.state && store.replaceState(context.state);

  return new Promise((resolve, reject) => {
    router.onReady(() => {
      // 预先把匹配到路由信息加载到router返回给客户端，客户端在router.onReady后执行app渲染，才能完全匹配上ssr的dom
      const matchedComponents = router.getMatchedComponents().filter(item => item !== null);
      Promise.all(matchedComponents.map(comp => {
        if (comp.asyncData) {
          // 组件内部的asyncData可能会对state再次操作，返回给客户端的是这些操作后的state，通过window.__INITIAL_STATE__取值
          return comp.asyncData({
            store,
            route: router.currentRoute,
          });
        }
      })).then(() => {
        resolve(app);
      }).catch(reject);
    }, reject);
  });

}