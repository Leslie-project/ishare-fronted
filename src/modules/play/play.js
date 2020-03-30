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


import VueVideoPlayer from 'vue-video-player'//https://github.com/surmon-china/vue-video-player
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer)

//兼容m3u8
const hls = require('videojs-contrib-hls')
Vue.use(hls)

import Play from './Play.vue'

import {EmbedPlugin } from 'bootstrap-vue'
Vue.use(EmbedPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(Play),
}).$mount('#play')
