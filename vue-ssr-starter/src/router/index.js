import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export function createRouter() {
  return new VueRouter({
    // mode: 'hash',
    mode: 'history',
    routes: [
      {
        path: '/',
        components: {},
      },
      {
        path: '/list',
        components: {
          body: () => import('pages/list'),
        },
      },
    ],
  });
}