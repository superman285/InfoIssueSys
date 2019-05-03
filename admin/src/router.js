import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import login from './views/Login';
import user from './views/User';
import article from './views/Article';
import articlecreate from './views/ArticleCreate';
import articleedit from './views/ArticleEdit';

Vue.use(Router);

const router = new Router({
    mode: 'history', //or hash
    //base: process.env.BASE_URL,
    base: '/admin/',
    routes: [
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        {
            path: '/article',
            name: 'article',
            component: article
        },
        {
            path: '/articlecreate',
            name: 'articlecreate',
            component: articlecreate
        },
        {
            path: '/articleedit',
            name: 'articleedit',
            component: articleedit
        },

    ]
});

router.beforeEach((to,from,next) => {
    NProgress.start();
    next();
});

router.afterEach((to,from) => {
    NProgress.done();
});

export default router;
