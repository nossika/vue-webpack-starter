import Vue from 'vue';
import App from './app';
import store from './store';
import router from './router';

const vm = new Vue({
  render: h => h(App),
  store,
  router,
});

vm.$mount('#app');
