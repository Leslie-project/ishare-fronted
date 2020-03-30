import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './search.css'

import Search from './search.vue'

new Vue({
	render: h => h(Search),
}).$mount('#search')