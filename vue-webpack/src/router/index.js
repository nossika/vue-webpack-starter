import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      components: {

      },
    },
    {
      path: '/list',
      components: {
        body: () => import('pages/list'),
      },
    },
  ],
  mode: 'hash',
});