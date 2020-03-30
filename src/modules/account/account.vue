<template>
	<div id='account'>
		<Navbar></Navbar>
		<div class="null"></div>
		<div class="account_body">
			<div class="account_main">
				<div class="aside">
					<div class="photo_wrapper">
						<div class="photo_back"></div>
						<div class="block">
							<el-avatar :size="90" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
							<div class="name">{{name}}</div>
						</div>
					</div>
					<div class="menu_wrapper">
						<div class="menu_item">
							<router-link to="/history" tag="span">历史播放</router-link>
						</div>
						<div class="menu_item">
							<router-link to="/collect" tag="span">我的收藏</router-link>
						</div>
						<div class="menu_item">
							<router-link to="/userInfo" tag="span">个人设置</router-link>
						</div>
						<div class="menu_item">
							<router-link to="/myVideo" tag="span">我的视频</router-link>
						</div>
						<div class="menu_item">
							<span @click="test"></span>
						</div>
					</div>
				</div>
				<div class="main">
					<router-view></router-view>
				</div>
			</div>

		</div>
		<Foot></Foot>
	</div>

</template>

<script>
	import Navbar from '../../components/NavBar.vue'
	import Foot from '../../components/Foot.vue'
	export default {
		components: {
			Navbar,
			Foot
		},
		data() {
			return {
				name: "最帅"
			}
		},
		methods: {
			test() {

			}
		}


	}
</script>

<style>
	#account {
		background: #121212;
		padding-top: 1px;
	}

	div {
		overflow: hidden;
	}

	.null {
		height: 150px;
	}

	.account_body {
		width: 100%;
		height: 1000px;
	}

	.account_main {
		width: 90%;
		margin: 0 auto;
	}

	.aside {
		height: 700px;
		width: 13%;
		float: left;
		padding: 5px;
	}

	.main {
		width: 85%;
		padding-left: 20px;
	}

	.block {
		position: relative;
		margin-top: 40px;
		z-index: 12;
	}

	.photo_wrapper {
		position: relative;
		height: 261px;
		overflow: hidden;
		text-align: center;
		border-radius: 4px 4px 0 0;
	}

	.photo_back {
		position: absolute;
		width: 100%;
		height: 261px;
		z-index: 11;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(../../assets/background.png);
	}

	.block .name {
		width: 90%;
		margin: 10px auto;
		height: 22px;
		line-height: 22px;
		color: hsla(0, 0%, 100%, .87);
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.menu_wrapper {

		background-color: #25252b;
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
