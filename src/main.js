import 'babel-polyfill';

import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import 'style/global.less';

window.VM = new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
});


