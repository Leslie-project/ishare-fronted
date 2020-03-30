<template>
	<div class="myVideo_block">
		<div class="upload_box">
			<el-button @click="dialog=true" type="primary" icon="el-icon-plus">
				上传视频
			</el-button>
			<el-drawer title="上传视频" :before-close="handleClose" :visible.sync="dialog" direction="rtl" custom-class="demo-drawer"
			 ref="drawer" :with-header="false">
				<div class="_title">上传视频</div>
				<div class="demo-drawer__content">
					<el-form :model="form" ref="form">
						<el-form-item label="视频名称:" :label-width="formLabelWidth">
							<el-input v-model="form.videoName" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="视频简介:" :label-width="formLabelWidth">
							<div></div>
							<el-input type="textarea" v-model="form.videoDesc" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="文件上传:" :label-width="formLabelWidth">
							<el-upload class="upload-demo" drag ref="upload" :action="uploadUrl()" :before-upload="beforeUploadVideo"
							 :on-progress="uploadVideoProcess" :data="videoInfo" :on-success="handleVideoSuccess" :auto-upload="false"
							 :on-change="getVideoSize">
								<i class="el-icon-upload" v-if="videoFlag == false"></i>
								<div class="el-upload__text" v-if="videoFlag == false">将文件拖到此处，或<em>点击上传</em></div>
								<div class="el-upload__tip" slot="tip">只能上传视频格式文件!</div>
								<el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent" style="margin-top:30px;"></el-progress>
							</el-upload>
						</el-form-item>
					</el-form>
					<div class="demo-drawer__footer">
						<el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
						<el-button @click="cancelForm">取 消</el-button>

					</div>
				</div>
			</el-drawer>
		</div>
		<div class="myVideo_content">
			<div class="record_list">
				<div class="record_title">
					<span style="color: aqua;">我的视频</span>
				</div>

				<div class="video_item" v-for="item in passVideo" @click="play(item.reVideoUrl)">
					<div class="head-img">
						<img src="../../../assets/播放.png" alt="">
					</div>
					<div class="video_info">
						<span class="video_name">{{item.reVideoName}}</span>
						<span class="video_desc">{{item.reVideoProfile}}</span>
						<span class="video_time">{{item.reVideoTime}}</span>
						<span class="video_size">{{changeType(item.reVideoSize)}}</span>
					</div>
				</div>
			</div>

			<div class="record_list">
				<div class="record_title">
					<span>待审核</span>
				</div>
				<div class="video_item  video_noplay" v-for="item in waitVideo" >
					<div class="head-img">
						<img src="../../../assets/播放2.png" alt="">
					</div>
					<div class="video_info">
						<span class="video_name">{{item.reVideoName}}</span>
						<span class="video_desc">{{item.reVideoProfile}}</span>
						<span class="video_time">{{item.reVideoTime}}</span>
						<span class="video_size">{{changeType(item.reVideoSize)}}</span>
					</div>
				</div>
			
			<div class="record_list" v-if="failVideo != ''">
					<div class="record_title">
						<span style="color: brown;">审核不通过</span>
					</div>
					<div class="video_item  video_noplay" v-for="item in failVideo" >
						<div class="head-img">
							<img src="../../../assets/错误.png" alt="">
						</div>
						<div class="video_info">
							<span class="video_name">{{item.reVideoName}}</span>
							<span class="video_desc">{{item.reVideoProfile}}</span>
							<span class="video_time">{{item.reVideoTime}}</span>
							<span class="video_size" style="color: brown !important;">审核不通过原因：{{item.failCause}}</span>
						</div>
					</div>
				
				</div>
			
			</div>
		</div>
	<el-dialog title="" :visible.sync="videoVisible" width="50%" :destroy-on-close="true">
		<div class="play_box">
			<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
			</video-player>
		</div>
	</el-dialog>
	</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				table: false,
				dialog: false,
				loading: false,
				videoFlag: false,
				videoVisible:false,
				videoUploadPercent: 10,
				passVideo: [],
				waitVideo: [],
				failVideo: [],
				form: {
					userEmail: localStorage.getItem('useremail'),
					videoName: '',
					videoDesc: '',
					videoSize: 0
				},
				formLabelWidth: '80px',
				timer: null,
				reqUrl: 'http://localhost:8080/youqu/account',
				playerOptions: {
					playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
					autoplay: false, // 如果为true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 是否视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: "video/mp4", // 类型
						src: ""
					}],
					poster: '', // 封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true, // 当前时间和持续时间的分隔符
						durationDisplay: true, // 显示持续时间
						remainingTimeDisplay: false, // 是否显示剩余时间功能
						fullscreenToggle: true // 是否显示全屏按钮
					}
				},
			};
		},
		computed: {
			videoInfo() {
				return this.form
			},
		},
		mounted() {
			this.getUserVideo()
		},
		methods: {
			handleClose(done) {
				if (this.loading) {
					return;
				}
				this.$confirm('确定要提交表单吗？')
					.then(_ => {
						if (this.form.videoName == '') {
							this.$message('视频名称不能为空');
							return
						}
						if (this.form.videoDesc == '') {
							this.$message('视频简介不能为空');
							return
						}
						this.$refs.upload.submit()
						this.loading = true;
						this.timer = setTimeout(() => {
							done();
							// 动画关闭需要一定的时间
							setTimeout(() => {
								this.loading = false;
							}, 400);
						}, 2000);
						this.form.videoName = ''
						this.form.videoDesc = ''
						this.form.videoSize = ''
						
					})
					.catch(_ => {});
			},
			cancelForm() {
				this.loading = false;
				this.dialog = false;
				clearTimeout(this.timer);
			},
			getVideoSize(file) {
				var _file = file.raw
				let url = URL.createObjectURL(_file)
				var audioElement = new Audio(url)
				var _this = this
				audioElement.addEventListener('loadedmetadata', function() {
					let playTime = audioElement.duration; //playTime就是当前视频长度
					_this.form.videoSize = Math.floor(playTime)

				})
			},
			beforeUploadVideo(file) {
				const isLt10M = file.size / 1024 / 1024 < 1024;
				if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'].indexOf(file.type) == -1) {
					this.$message.error('请上传正确的视频格式');
					return false;
				}
				if (!isLt10M) {
					this.$message.error('上传视频大小不能超过1GB哦!');
					return false;
				}
			},
			uploadVideoProcess(event, file, fileList) {
				this.videoFlag = true;
				this.videoUploadPercent = parseInt(file.percentage.toFixed(0));
			},
			uploadUrl() {
				return this.reqUrl + '/uploadVideo'
			},
			handleVideoSuccess(res, file) {
				this.videoFlag = false
				this.videoUploadPercent = 0;
			},
			getUserVideo() {
				axios.get(this.reqUrl + "/getUserVideo", {
					params: {
						email: localStorage.getItem('useremail')
					}
				}).then(res => {
					var data = res.data.data
					console.log(data)
					for (var i in data) {
						if (data[i].reVideoState === "01") {
							this.passVideo.push(data[i])
						} else if (data[i].reVideoState === "02") {
							this.waitVideo.push(data[i])
						} else {
							this.failVideo.push(data[i])
						}
					}
				})
			},
			changeType(val) {
				var min = Math.floor(val / 60)
				return min + "分" + Math.floor(val % 60) + "秒"
			},
			play(url){
				this.videoVisible = true
				this.playerOptions.sources[1] = url
			}

		}
	}
</script>

<style>
	.upload_file {
		width: 360px;
		float: left;
	}

	.upload_submitBtn {
		height: 180px;
		color: ;
	}

	.upload_box {
		margin-bottom: 20px;
	}

	.demo-drawer__content {
		width: 90%;
	}

	.el-drawer {
		background: #121212;
	}

	._title {
		font-size: 20px;
		margin: 10px;
		color: hsla(0, 0%, 100%, 0.87);
	}

	.el-form-item__label {
		color: #fff;
	}

	.el-input__inner {
		background-color: #25252b;
		border: none;
		color: #fff;
	}

	.el-textarea__inner {
		background-color: #25252b;
		border: none;
		color: #fff;
		height: 80px;
	}

	.demo-drawer__footer button {
		margin-left: 1%;
		float: left;
		width: 48%;
	}

	.el-upload {
		width: 100%;
	}

	.el-upload-dragger {
		background-color: #25252b;
		border: none;
		width: 100%;
		height: 180px;
	}

	.head-img {
		float: left;
	}

	.head-img img {
		display: block;

		height: 100%;
		overflow: hidden;
		border-radius: 4px;
		transition: all 0.8s;
		cursor: pointer;
	}

	.video_item {
		width: 100%;
		height: 32px;
		line-height: 32px;
		margin-bottom: 20px;
	}

	.video_info {}

	.video_info span {
		margin-left: 20px;
		font-size: 20px;
		line-height: 32px;
		color: hsla(0, 0%, 100%, 0.87);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.video_desc {
		color: hsla(0, 0%, 100%, 0.37) !important;


	}

	.video_item:hover {
		border-bottom: hsla(0, 0%, 100%, 0.37) 1px solid;
		cursor: pointer;
	}

	.video_time {
		color: burlywood !important;
	}

	.video_size {
		color: aquamarine !important;
	}

	.record_title {
		position: relative;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 22px;
		text-align: left;
	}

	.record_title span {
		position: relative;
		display: inline-block;
		padding-right: 18px;
		vertical-align: middle;
		z-index: 10;
		color: hsla(0, 0%, 100%, .87);
	}
	.video_noplay:hover{
		border: none;
	}
	.el-dialog {
		background-color: rgba(0, 0, 0, 0);
	}
</style>
