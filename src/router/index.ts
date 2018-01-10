import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// todo RouterOptions ?
const routes: any = [
    {
        path: '/home',
        components: {
            body: resolve => { import('containers/home/index.vue').then(data => resolve(data)) },
        }
    },
    {
        path: '/error',
        components: {
            body: resolve => { import('containers/404.vue').then(data => resolve(data)) },
        }
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        redirect: '/error'
    },
];

export default new Router({
    routes
});