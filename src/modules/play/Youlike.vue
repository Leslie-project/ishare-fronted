<template>
	<div class="youlike_block">
		<div class="youlike_body">
			<div class="youlike_main">
				<div class="youlike_title">
					<span>猜你喜欢</span>
					<h6 class="refresh" @click="getYoulike()"><i class="el-icon-refresh"></i>&nbsp;换一换</h6>
				</div>
				<div class="youlike_wrapper">
					<div class="v-pack" v-for="item in youlikes">
						<div class="v-item">
							<a href=""><img :src="item.vimage"></a>
							<a class="bg_1" href=""></a>
							<div class="rightbottom">{{item.vscore}}</div>
						</div>
						<div class="v-content">
							<div class="v-content-title">
								<a href="">{{item.vname}}</a>
							</div>
						</div>

					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				videoCode:'',
				youlikes: [],
				screenWidth: document.body.clientWidth,
				reqUrl:'http://localhost:8080/youqu/play'
			}
		},
		mounted() {
			this.videoCode = window.location.href.split("?")[1].split("=")[1]
			
			// 监听窗口大小
			window.onresize = () => {
				return (() => {
					this.screenWidth = document.body.clientWidth
				})()
			}
			this.getYoulike()
		},
		methods: {
			getYoulike() {
				var count = Math.floor(this.screenWidth*0.9/ 222)
				axios.get(this.reqUrl+'/like',{
					params:{
						videoCode:this.videoCode,
						len:count*2
					}
				}).then(res=>{
					this.youlikes = res.data.data
					console.log(this.youlikes)
				})
			},
			test() {

			}
		},
		watch: {
			screenWidth: function() {
				this.getYoulike()
			}
		}


	}
</script>
<style>
	.youlike_body {
		margin-top: 20px;
		width: 90%;
		margin: 0 auto;
		min-height: 500px;

	}

	.youlike_main {
		margin-top: 20px;
		color: hsla(0, 0%, 100%, .87);
	}

	.refresh {
		float: right;
		cursor: pointer;
	}

	.youlike_wrapper {
		overflow: hidden;
	}

	.youlike_title span {
		font-size: 20px;
		font-weight: 400;
	}

	.v-pack {
		width: 222px;
		float: left;

		margin: 12px 12px 12px 0;
	}

	.v-item {
		height: 315px;
		width: calc(100%-12px);
		background-color: #25252b;
		border-radius: 4px;
		overflow: hidden;
		position: relative;
	}

	.v-item img {
		display: block;
		cursor: pointer;
		width: 100%;
		height: 100%;
		border-radius: 4px;

	}

	.v-item img:hover {
		transition: transform .25s ease-in-out;
		transform: scale(1.05);
	}

	.bg_1 {
		cursor: pointer;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 46px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAYAAADp73NqAAAAAXNSR…iAKtAIZpAYKxYJsDqwBFgJmjacXDTz0Likm4ewCKyXCQBc7QDuqt9S0QAAAABJRU5ErkJggg==) repeat-x;
		background-image: linear-gradient(-180deg, transparent 12%, rgba(0, 0, 0, .3));
		border-radius: 0 0 4px 4px;
		z-index: 10;
	}

	.rightbottom {
		color: #ff6f3b;
		font-size: 20px;
		font-weight: 700;
		font-family: PingFangSC-Regular, Microsoft YaHei, 微软雅黑, helvetica, arial, verdana, tahoma, sans-serif;
		line-height: 20px;
		height: 20px;
		text-align: center;
		position: absolute;
		right: 0;
		bottom: 0;
		cursor: pointer;
		z-index: 12;
	}

	.v-content {
		width: calc(100% - 12px);
	}

	.v-content-title {
		margin-top: 10px;
		font-family: PingFangSC, Microsoft YaHei, 微软雅黑, helvetica, arial, verdana, tahoma, sans-serif;
		font-size: 16px;
		color: #fff;
		line-height: 16px;
		height: 16px;
		white-space: nowrap;
		text-overflow: ellipsis;
		cursor: pointer;
		opacity: .87;
	}

	.v-content-title a {
		display: inline-block;
		max-width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 17px;
		line-height: 17px;
		text-decoration: none;
		color: inherit;

	}
</style>
