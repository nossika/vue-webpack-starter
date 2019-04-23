import Vue from 'vue';
import App from './app.vue';
import { createStore } from './store';
import { createRouter } from './router';

export function createApp() {
  const app = new Vue({
    render: h => h(App),
    store: createStore(),
    router: createRouter(),
  });
  return app;
}