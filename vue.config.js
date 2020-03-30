const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
	pages:{
		index:{
			entry:'./src/main.js',
			template:'public/index.html',
			filename:'index.html'
		},
		play:{
			entry:'./src/modules/play/play.js',
			template:'public/play.html',
			filename:'play.html'
		},
		register:{
			entry:'./src/modules/register/register.js',
			template:"public/register.html",
			filename:'register.html'
		},
		account:{
			entry:'./src/modules/account/account.js',
			template:'public/account.html',
			filename:'account.html'
		},
		admin:{
			entry:'./src/modules/admin/admin.js',
			template:'public/admin.html',
			filename:'admin.html'
		},
		search:{
			entry:'./src/modules/search/search.js',
			template:'public/search.html',
			filename:'search.html'
		}
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:3000', //对应自己的接口
				secure: false,
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		port: 8090,
		open: true
	}
}
