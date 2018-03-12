import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// todo RouterOptions ?
const routes: any = [
    {
        path: '/home',
        components: {
            body: () => import('containers/home/index.vue'),
        }
    },
    {
        path: '/:room',
        components: {
            body: () => import('containers/room/index.vue'),
        }
    },
    {
        path: '/error',
        components: {
            body: () => import('containers/404.vue'),
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