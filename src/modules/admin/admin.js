import Vue from 'vue'
import Admin from './admin.vue'

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


import Login from './components/login.vue'

import router from './router.js'
new Vue({
	router,
	render: h => h(Admin)
}).$mount('#admin')
