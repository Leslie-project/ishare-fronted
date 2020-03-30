<template>
	<div class="videoReview_block">

		<el-table ref="multipleTable" :data="reVideolist" border style="width: 80%" height="500" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column fixed prop="userName" label="用户名称" width="150">
			</el-table-column>
			<el-table-column prop="userEmail" label="用户邮箱" width="120">
			</el-table-column>
			<el-table-column prop="reVideoUploadTime" label="上传时间" width="120" sortable>
			</el-table-column>
			<el-table-column prop="reVideoName" label="视频名称" width="120">
			</el-table-column>
			<el-table-column prop="reVideoState" label="视频审核状态" width="120">
			</el-table-column>
			<el-table-column prop="reVideoSize" label="视频大小" width="300">
			</el-table-column>
			<el-table-column prop="reVideoProfile" label="视频简介" width="120">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="120">
				<template slot-scope="scope">
					<el-button @click="openVideo(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small" @click="passVideo(scope.row)">通过</el-button>
					<el-button type="text" size="small" @click="causeVisible = true,currentId=scope.row.id">撤回</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- <div style="margin-top: 20px">
			<el-button @click="toggleSelection([tableData[1], tableData[2]])">审核多条</el-button>
			<el-button @click="toggleSelection()">取消选择</el-button>
		</div> -->

		<el-dialog title="" :visible.sync="videoVisible" width="50%" :destroy-on-close="true">
			<div class="play_box">
				<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
				</video-player>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="videoVisible = false,causeVisible=true">撤 回</el-button>
				<el-button type="primary" @click="videoVisible = false,passVideoById()">通 过</el-button>
			</span>

		</el-dialog>
		<el-dialog :visible.sync="causeVisible" width="50%" :destroy-on-close="true" >
			<el-input
			  type="textarea"
			  :rows="6"
			  placeholder="请输入撤回原因"
			  v-model="failCause">
			</el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="causeVisible=false,cleanFailCause()">取 消</el-button>
				<el-button type="primary" @click="failVideo()">提 交</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				reVideolist: [],
				multipleSelection: [],
				videoVisible: false,
				causeVisible: false,
				failCause:'',
				currentId: 0,
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

				reqUrl: 'http://localhost:8080/youqu/admin'
			}
		},
		mounted() {
			this.getvideoReviewlist()
		},
		methods: {
			handleClick(row) {
				console.log(row);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			getvideoReviewlist() {
				axios.get(this.reqUrl + '/getReVideoList').then(res => {
					//console.log(res.data.data)
					this.reVideolist = res.data.data
				})
			},
			openVideo(row) {
				this.playerOptions.sources[0].src = row.reVideoUrl
				this.videoVisible = true
				this.currentId = row.id
			},
			passVideo(row){
				axios.get(this.reqUrl+'/passVideo',{
					params:{
						id:row.id
					}
				}).then(res=>{
					this.getvideoReviewlist()
				})
			},
			passVideoById(){
				axios.get(this.reqUrl+'/passVideo',{
					params:{
						id:this.currentId
					}
				}).then(res=>{
					this.getvideoReviewlist()
				})
			},
			failVideo(){
				axios.get(this.reqUrl+'/failVideo',{
					params:{
						id:this.currentId,
						cause:this.failCause
					}
				}).then(res=>{
					this.getvideoReviewlist()
					this.causeVisible = false
					this.cleanFailCause()
				})
			},
			cleanFailCause(){
				this.failCause = ''
			}
		}


	}
</script>

<style>
	.el-dialog {
		background-color: rgba(0, 0, 0, 0);
	}
</style>
