<template>
	<div class="play_box">
		<div class="play_contianer">
			<div class="play_body">
					<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"
					@timeupdate="onPlayerTimeupdate($event)"
					@pause="uploadRec()" 
					>
					</video-player>
			</div>
			<div class="play_info" >
				<div class="info_name">{{videoSrc.vname}}
				</div>
				<el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" class="info_rate" :max="parseInt(10)">
				</el-rate>
				<div  class="info_time">{{videoSrc.vtime}}</div>
				<div class="info_about">
					<p>类型：<span>{{videoSrc.vtype}}</span></p>
					<p>主演：<span>{{videoSrc.vact}}</span></p>
					<p>概要：<span>{{videoSrc.vprofile}}</span></p>
				</div>
			</div>
		</div>
		<div class="play_recommend">
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import reqUrl from '../../request.js'
	export default {
		data() {
			return {
				value: 0,
				currentTime:"1:18:13",
				videoCode:'',
				videoSrc:[],
				reqUrl:reqUrl+'/play',
				playerOptions: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], // 可选的播放速度
					autoplay: false, // 如果为true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 是否视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: "application/x-mpegURL", // 类型
						src: "" // url地址
					}],
					poster: '', // 封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true, // 当前时间和持续时间的分隔符
						durationDisplay: true, // 显示持续时间
						remainingTimeDisplay: false, // 是否显示剩余时间功能
						fullscreenToggle: true // 是否显示全屏按钮
					}
				}
			}
		},
		mounted(){
			this.videoCode = window.location.href.split("?")[1].split("=")[1]
			this.getVideoSrc();
		},
		
		methods: {
			getVideoSrc(){
				axios.get(this.reqUrl+'/playSource',{
					params:{
						videoCode:this.videoCode
					}
				}).then(res=>{
					this.videoSrc = res.data.data
					this.playerOptions.sources[0].src = this.videoSrc.vurl
					this.value = parseFloat(this.videoSrc.vscore)
				})
			},
			onPlayerTimeupdate($event) {
				//var player =  this.$refs.videoPlayer.player
				//var time =player.duration();
				//var min = Math.floor(time%3600)
				//console.log(Math.floor(time/3600)+":"+Math.floor(min/60)+":"+min%60)
				
			},
			uploadRec(){
				var player =  this.$refs.videoPlayer.player
				var percent =parseInt(player.currentTime()/player.duration()*100)
				if(percent < 1){
					percent = 1
				}
				if(localStorage.getItem('flag') === "1"){
					axios.post(this.localUrl+'/uploadRec',{
						userEmail:localStorage.getItem("useremail"),
						vcode:this.videoCode,
						vwatchTimeLength:Math.floor(player.currentTime()) ,
						watchTime:new Date(),
						vlength:Math.floor(player.duration()),
						vwatchPercent:percent+"%",
					})
				}
			},
			
		},
		
		
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	div {
		overflow: hidden;
	}

	.play_box {
		width: 100%;

	}

	.play_contianer {
		width: 90%;
		margin: 0 auto;
		margin-top: 86px;
		height: inherit;

	}

	.play_body {
		width: 75%;
		height: inherit;
		float: left;
	}

	.play_info {
		float: right;
		top: 0;
		width: 20%;
		margin-top: 20px;
		color: antiquewhite;
		overflow: hidden;
		text-overflow: ellipsis;
		
	}

	.info_name {
		font-weight: 800;
		font-size: 25px;
		display: inline;
	}

	

	.info_time {
		margin-bottom: 20px;
	}

	.info_about p {
		color: hsla(0, 0%, 100%, .38);
		font-size: 16px;
		line-height: 40px;
		margin-bottom: 20px;
	}

	p span {
		font-size: 20px;
		color: hsla(0, 0%, 100%, .87);
		font-family: cursive;
	}
</style>
