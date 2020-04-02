import Vue from 'vue'

import {
	BootstrapVue,
	IconsPlugin,
	LayoutPlugin
} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'

import App from './App.vue'
Vue.config.productionTip = false


new Vue({
	
	render: h => h(App),
	
}).$mount('#app')
