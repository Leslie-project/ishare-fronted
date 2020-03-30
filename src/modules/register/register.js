import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Register from './register.vue'


import axios from 'axios'



new Vue({
	render: h => h(Register),
	router:new VueRouter()
}).$mount('#register')