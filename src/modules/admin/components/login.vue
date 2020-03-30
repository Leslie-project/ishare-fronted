<template>
	<div class="login">
		<div class="login_title">
			管理员入口
		</div>
		<div class="login_box">
			<div class="login_label">
				<span>账号：</span>
				<el-input placeholder="管理员账号" v-model="admin" class="login_input"></el-input>
			</div>
			<div class="login_label">
				<span>密码：</span>
				<el-input placeholder="请输入密码" v-model="password" show-password class="login_input"></el-input>
			</div>
			<div class="login_label">
				<el-button type="primary" @click="login" class="login_btn">登录</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				admin: "",
				password:""
			}
		},
		methods:{
			login(){
				if(this.admin === "123"){
					if(this.password === "123"){
						alert("登录成功")
						window.location.href = "#/adminContent"
					}else{
						alert("密码错误")
					}
				}
			}
		}
	}
</script>

<style>
	.login {
		position: absolute;
		height: 400px;
		width: 600px;
		margin: 0 auto;
		left: 50%;
		top: 50%;
		margin-left: -300px;
		margin-top: -200px;
		box-shadow: 0 2px 4px rgba(221, 220, 211, 30), 0 0 6px rgba(218, 218, 218, 10)
	}

	.login_title {
		margin: 10px 0 10px 0;
		color: hsla(0, 0%, 100%, .6);
		height: 20%;
		text-align: center;
		line-height: 50px;
		font-size: 25px;
	}

	.login_title span {
		display: block;
	}
	.login_box{
		margin: 0 auto;
		width: 600px;
	}
	.login_label{
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
	.login_label span{
		    color: hsla(0, 0%, 100%, .87);
			font-size: 20px;
	}
	.login_input {
		width: 50% !important;
	}
	.login_btn {
		width: 63% !important;
		margin-top: 20px !important;
	}
</style>
