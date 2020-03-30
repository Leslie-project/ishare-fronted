<template>
	<div>
		<div class="aside_body">
			<div class="aside_box">
				<el-container style="width:200px ;height: 500px;">
					<el-aside width="100%" style="background-color: #25252b;">
						<div class="menu_wrapper">
							<div class="menu_item">
								<router-link to="/adminContent/userManage" tag="span">用户管理</router-link>
							</div>
							<div class="menu_item">
								<router-link to="/adminContent/videoReview" tag="span">用户视频待审核</router-link>
							</div>
							<div class="menu_item">
								<router-link to="/adminContent/userVideo" tag="span">所有用户视频</router-link>
							</div>
							<div class="menu_item">
								<router-link to="/adminContent/addVideo" tag="span">综合视频添加</router-link>
							</div>

						</div>
					</el-aside>
				</el-container>
			</div>
		</div>
		<div class="main_body">
			<div class="main_box">
				<el-container>
					<el-header>
						<h1 style="color: hsla(0, 0%, 100%, .87);">Ishare 后台管理工作台</h1>
					</el-header>
					<el-main>
						<div class="el-main_box">
							<router-view></router-view>
						</div>
					</el-main>
				</el-container>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		methods: {

		},
		
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		
	}

	.aside_body {
		width: 20%;
		float: left;
	}

	.aside_box {
		margin: 200px 0 0 40%;
	}
	.el-main{
		margin-top: 20px
	}
	.main_body {
		width: 75%;
		float: right;
	}

	.main_box {
		margin: 100px 0 0 50px;
	}

	.menu_item {
		color: hsla(0, 0%, 100%, .6);
	}

	.menu_item span {
		position: relative;
		display: block;
		text-align: center;
		font-size: 18px;
		letter-spacing: 0;
		cursor: pointer;
		line-height: 57px;
		height: 57px;
		text-decoration: none;
	}

	.router-link-exact-active {
		color: #0d9bff;
		opacity: 1;
		font-weight: 700;
	}
</style>
