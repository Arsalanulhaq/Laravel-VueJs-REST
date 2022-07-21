/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');
import VueAxios from 'vue-axios';
// import VueRouter from 'vue-router';
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import { createApp } from 'vue'
import App from './App.vue';

// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

// const router = new VueRouter({
//     mode: 'history',
//     routes: routes
// });

const app = createApp(App)
    .use(router)
    .use(VueAxios, axios);
app.mount('#app')

// Vue.createApp(App).use(router).mount('#app');

// const app = new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App),
// });
