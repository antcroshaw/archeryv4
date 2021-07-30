
import Vue from 'vue';
import VueRouter from 'vue-router';

import addHandicap from "./components/addHandicap";
import displayHandicaps from "./components/displayHandicaps";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: displayHandicaps
        },
        {
            path: '/add',
            name: 'add',
            component: addHandicap
        },
    ]
});

export default router;
