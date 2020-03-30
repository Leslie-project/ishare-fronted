<template>
	<div class="reg_box">
		<div class="logo">

		</div>
		<div class="logo-tips">注册成功后，账号可以登录Ishare网站</div>
		<el-steps :active="active" align-center class="step-wrap">
			<el-step title="填写邮箱账号">123</el-step>
			<el-step title="成功"></el-step>
		</el-steps>
		<div class="registe-wrap">

			<div class="label">
				<span>用户名称：</span>
				<el-input placeholder="用户名称" v-model="name" maxlength="10" show-word-limit></el-input>
			</div>
			<div class="label">
				<span>邮箱地址：</span>
				<el-input placeholder="邮箱地址" v-model="email"   @blur="revEmail"></el-input>
			</div>
			<div class="label">
				<span>设置密码：</span>
				<el-input placeholder="6-16位字母、数字" v-model="password" show-password @blur="revWord" ></el-input>
			</div>
			<div class="label">
				<span>确认密码：</span>
				<el-input placeholder="确认密码" v-model="againPassword" show-password></el-input>
			</div>
			<div class="label">
				<el-button type="primary" @click="mysubmit">注册</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {

		data() {
			return {
				active: 1,
				againPassword: "",
				name: "",
				email: "",
				password: ""
			}
		},
		methods: {
			revEmail: function() {
				var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
				if (this.mail != '' && !regEmail.test(this.email)) {
					this.$message({
						message: '邮箱格式不正确',
						type: 'error'
					})
					this.email = ''
				}
			},
			revWord:function(){
				var regWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*?[#?!@@$%^&*-]).{6,16}$/;
				if(this.password !='' && !regWord.test(this.password)){
					this.$message({
						message: '密码格式不正确，至少包括一个大写字母、一个小写字母、一个数字、不能有特殊字符',
						type: 'error'
					})
					this.password = ''
				}
			},
			mysubmit: function() {
				var regUrl = "http://localhost:8080/youqu/account/register"
				if (this.password === this.againPassword) {
					
					let data = {
						username: this.name,
						password: this.password,
						email: this.email

					}
					axios.post(regUrl, data).then(res => {
						if(res.data.code === "200"){
							this.$message({
								message: '恭喜你!注册成功，即将跳转主页...',
								type: 'success'
							})
							this.active = 2
							//window.location.href = "index.html"
						}
						if(res.data.code === "400"){
							this.$message({
								message: '该邮箱已注册！',
								type: 'error'
							})
							this.email =''
						}
					})
				} else {
					alert("密码两次输入不一致")
					this.againPassword=''
				}
			},
			warn: function(msg) {
				this.$alert(msg, "警告", {
					confirmButtonText: '确定',
					callback: action => {
						this.$message({
							type: 'info',
							message: `action: ${ action }`
						});
					}
				});
			},
			success(msg) {
				this.$alert(msg, "成功", {
					confirmButtonText: '确定',
					callback: action => {
						this.$message({
							type: 'info',
							message: `action: ${ action }`
						});
					}
				});
			}

		}
	}
</script>

<style>
	body {
		background: #f9f9f9;
		font-size: 12px;
		font-family: "Microsoft YaHei", helvetica, arial, sans-serif;
		color: #666;

	}

	.reg_box {
		height: 700px;
		width: 40%;
		margin: 0 auto;
		border: 1px solid #000000;
	}

	.logo {
		width: 300px;
		margin: 100px auto 0;
	}

	.logo-tips {
		text-align: center;
		margin-top: 15px;
	}

	.step-wrap {
		width: 600px;
		margin: 35px auto;
		height: 70px;
	}

	.registe-wrap {
		margin: 0 auto;
		width: 600px;
	}

	.registe-wrap span {
		font-size: 14px;
	}

	.label {
		height: inherit;
		padding-right: 4px;
		z-index: 2;
		line-height: 39px;
		text-align: center;
		color: #333;
		display: inline-block;
		width: 100%;
		margin-top: 20px;
	}

	.el-input {
		width: 50%;
	}

	.el-button {
		width: 63%;
		margin-top: 20px;
	}
</style>
