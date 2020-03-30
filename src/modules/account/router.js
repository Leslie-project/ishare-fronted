import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect:'history' },
    {path:'/history',component:()=> import('./components/history.vue') },
    {path:'/userInfo',component:()=> import('./components/userInfo.vue') },
	{path:'/collect',component:()=> import('./components/collect.vue') },
	{path:'/myVideo',component:()=> import('./components/myVideo.vue') },

]

var Router = new VueRouter({
    routes: routes,
    mode:'hash'
});

export default Router;
