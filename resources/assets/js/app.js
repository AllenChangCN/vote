
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router'
import VueResource from 'vue-resource' //注册两个插件
import Vue from 'vue'
import Element from 'element-ui'
require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Element);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('vote', require('./components/vote.vue'));


const routes=[
    {
        path:'/', component: require('./components/voteMain.vue'),
        children:[
            {
                path:'vote',
                component: require('./components/vote.vue'),
            },
            {
                path:'history',
                component: require('./components/history.vue'),
            },
            {
                path:'advice',
                component: require('./components/advice.vue'),
            },
            {
                path:'other',
                component: require('./components/other.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
});
