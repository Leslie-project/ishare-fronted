import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [{
		path: '/',
		redirect: 'login'
	},
	{
		path: '/adminContent',
		component: () => import('./components/adminContent.vue'),
		redirect:'/adminContent/userManage',
		meta: {
			title: 'Ishare 后台'
		},
		children: [
			{
				path: 'userManage',
				component: () => import('./components/components/userManage.vue'),
				meta:{
					title:'用户管理'
				}
			},
			{
				path: 'videoReview',
				component: () => import('./components/components/videoReview.vue'),
				meta:{
					title:'用户视频待审核'
				}
			},
			{
				path: 'userVideo',
				component: () => import('./components/components/userVideo.vue'),
				meta:{
					title:'所有用户视频'
				}
			},
			{
				path: 'addVideo',
				component: () => import('./components/components/addVideo.vue'),
				meta:{
					title:'综合视频添加'
				}
			}
		]
	},
	{
		path: '/login',
		component: () => import('./components/login.vue'),
		meta: {
			title: '管理员入口'
		}
	}

]

var Router = new VueRouter({
	routes: routes,
	mode: 'hash'
});

Router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title || admin
	next()
})

export default Router;
