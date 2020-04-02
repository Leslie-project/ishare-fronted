<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="faded" fixed="top" style="background-color: rgba(0,0,0,0.3);">
			<b-navbar-brand href="#">NavBar</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<div class="navbar-search">
				<b-navbar type="dark" variant="faded">
					<!-- <b-nav-form> -->
						<b-form-input class="mr-sm-2" placeholder="搜全网" v-model="value"></b-form-input>
						<b-button variant="dark" class="my-2 my-sm-0"  @click='submit'>Search</b-button>
					<!-- </b-nav-form> -->
				</b-navbar>
			</div>

			<div class="navbar-info">
				<div class="info_item">
					<el-popover placement="bottom" title="会员特权" width="200" trigger="hover" content="敬请期待">
						<el-button slot="reference" type="info" icon="el-icon-position" circle></el-button>
					</el-popover>
				</div>
				<div class="info_item">
					<el-popover placement="bottom-start" title="观看历史" width="300" trigger="hover" content="请登录!">
						<div class="block" v-if="isLogin">
							<el-timeline>
								<el-timeline-item v-for="item in watchHistorys" :timestamp="item.watchTime">
									<i class="el-icon-video-play"></i>&nbsp;{{item.vname}}
									<span>看至{{item.vwatchPercent}}</span>
								</el-timeline-item>
							</el-timeline>
						</div>
						<el-button slot="reference" type="primary" icon="el-icon-video-play" circle></el-button>
					</el-popover>
				</div>
				<div class="info_item">
					<a href="">
						<el-popover placement="top-start" title="收藏" width="200" trigger="hover" content="点击跳转">
							<el-button slot="reference" type="primary" icon="el-icon-loading" circle></el-button>
						</el-popover>
					</a>
				</div>
				<div class="info_item">
					<el-popover placement="top-start" title="点击登录" width="200" trigger="hover" content="">
						<el-button slot="reference" type="primary" icon="el-icon-s-custom" circle @click='loginOpen'></el-button>
					</el-popover>
				</div>

			</div>
		</b-navbar>
		<div class="login_block" v-if="loginActive">
			<div class="login_iframe">
				<div class="login_box">
					<h5>登录</h5>
					<el-form :model="loginForm" :rules="rules">
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="loginForm.email" class="login_input"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="password">
							<el-input v-model="loginForm.password" class="login_input"></el-input>
						</el-form-item>
					</el-form>
					<el-button type="primary" class="login_btn" @click="loginSub">登录</el-button>
				</div>
			</div>
			<div class="login-close" title="关闭" @click="loginClose">
				<i class="el-icon-close"></i>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import reqUrl from '../request.js'
	export default {
		name: "Navbar",
		data() {
			return {
				watchHistorys: [],
				loginActive: false,
				value:'',
				isLogin: false,
				loginForm: {
					email: "",
					password: ""
				},
				rules: {
					email: [{
						required: true,
						message: "请输入邮箱地址",
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				},
				reqUrl: reqUrl+'/account',
			}
		},
		mounted() {
			if (localStorage.getItem('flag') === '1') {
				this.isLogin = true
			}
			this.watchHistory()
		},
		methods: {
			loginClose() {
				this.loginActive = !this.loginActive
			},
			loginOpen() {
				if (localStorage.getItem('flag') === "1") {
					window.location.href = "/account.html"
				}
				if (!this.loginActive) {
					this.loginActive = !this.loginActive
				}
			},
			loginSub: function() {

				axios.get(this.reqUrl + '/login?email=' + this.loginForm.email + '&password=' + this.loginForm.password).then(res => {
					//console.log(res.data)
					if (res.data.code === "500105") {
						this.$message({
							message: '邮箱或密码登录错误！',
							type: 'error'
						})
					} else if (res.data.code === "200") {
						localStorage.clear()
						localStorage.setItem('useremail', this.loginForm.email)
						localStorage['flag'] = 1
						this.$message({
							message: '登录成功',
							type: 'success'
						})
						this.loginClose();
					}
				})
			},
			watchHistory: function() {
				if (localStorage.getItem('flag') === "1") {
					var useremail = localStorage.getItem('useremail')
					axios.get(this.reqUrl + '/watchHistory', {
						params: {
							email: useremail
						}

					}).then(res => {
						this.watchHistorys = res.data.data
						//console.log(this.watchHistorys)
					})
				}
			},
			submit:function(){
				window.location.href = 'search.html?value=' + this.value
			}
		}

	}
</script>

<style>
	.navbar-box {
		width: 100%;
	}

	.navbar-search {
		margin: 0 auto;
		position: relative;
	}

	.navbar-info {
		float: right;
	}

	.info-style {
		float: left;
		margin-right: 20px;
	}

	.info-style-text {
		margin-top: -6px;
		text-align: center;
		color: hsla(0, 0%, 100%, .6);
		font-size: 14px;
		line-height: 20px;
	}

	.info-person {
		font-size: 4em !important;
	}

	.login_block {
		padding: 0px 0px 0px 380px !important;
		width: auto !important;
		min-height: 334px;
		background: #fff url(//account.youku.com/static-resources/images/stylize/youku_bg.jpg) no-repeat right bottom !important;
		color: #333 !important;
		position: fixed;
		overflow: hidden;
		font-size: 12px;
		z-index: 99;
		left: 50%;
		top: 50%;
		margin-left: -380px;
		margin-top: -167px;
	}

	.login_iframe {
		position: relative;
		z-index: 1;
		min-height: 350px;
		width: 380px;
	}

	.login_iframe .login_box {
		position: relative;
		background: hsla(0, 0%, 100%, .9);
		min-height: 302px;
		padding: 24px 24px 0 18px;
		width: 350px;
		top: 30px;

	}

	.el-form-item {
		margin-top: 20px;
	}

	.login_iframe .login_input {
		width: 80%;
	}

	.login_box .login_btn {
		width: 100% !important;
	}

	.login-close {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 10px;
		top: 10px;
		cursor: pointer;
		z-index: 999;
		outline: 0;
		color: #2fb3ff;
		font-size: 24px;
		line-height: 100%;
	}

	.info_item {
		margin-right: 20px;
		display: inline-block;
	}

	.el-popover {
		background: rgb(18, 18, 18);
		border: none;
	}

	.el-popover .el-popover__title {
		color: hsla(0, 0%, 100%, .87);
	}

	.el-popover .popper__arrow::after {
		top: 0 !important;
		border-bottom-color: rgb(18, 18, 18) !important;
	}

	.el-timeline {
		padding: 0;
	}

	.el-timeline-item__content {
		color: hsla(0, 0%, 100%, .37);
	}

	.el-timeline-item span {
		float: right;
	}
</style>
