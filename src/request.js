import $config from '../config/config_env.js'

let reqUrl = ''
switch (process.env.VUE_APP_CURENV) {
	case 'local':
		reqUrl = $config.apiUrl.local
		break

	case 'pro':
		reqUrl = $config.apiUrl.pro
		break
}
console.log(reqUrl)
export default reqUrl;
