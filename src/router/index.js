const Vue = require('vue').default;
const Router = require('vue-router').default;

Vue.use(Router);

module.exports = new Router({
    routes: [
        {
            path: '/home',
            components: {
                body: resolve => require(['containers/home/index.vue'], resolve),
            }
        },
        {
            path: '/error',
            components: {
                body: resolve => require(['containers/404.vue'], resolve),
            }
        },
        {
            path: '*',
            redirect: '/error'
        }
    ]
});