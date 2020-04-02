<template>
	<div class="comment_block">
		<div class="comment_main">
			<div class="comment_title">
				<span>评论</span>
			</div>
			<div class="comment_box">
				<el-input type="textarea" placeholder="有爱评论,说点好听的..." v-model="textarea" maxlength="300" show-word-limit @keydown.native="listen($event)">
				</el-input>
				<div class="comment_btn">
					<el-button type="primary" round @click='sendComment'>发表评论</el-button>
					<el-button type="primary" round @click="drawer = true;getComment()" >更多评论</el-button>
				</div>
			</div>
		</div>

		<el-drawer title="热门评论" :visible.sync="drawer" :with-header="false">
			<div class="_title">热门评论</div>
			<div class="comment_scroll">
				<el-card class="box-card" v-for="(item,index) in comments">
					<div class="comment_name">{{item.userName}}&nbsp;&nbsp;:</div>
					<div class="comment_content">{{item.comContent}}</div>
					<el-divider content-position="right">{{item.comTime}}</el-divider>
				</el-card>
			</div>
		</el-drawer>
	</div>
</template>

<script>
	import axios from 'axios'
	import reqUrl from '../../request.js'
	export default {
		data() {
			return {
				textarea: "",
				vcode: "",
				isLogin: localStorage.getItem('flag') == "1" ? true : false,
				drawer: false,
				reqUrl: reqUrl+"/play",
				comments: [
				]
			}
		},
		mounted() {
			this.vcode = window.location.href.split("?")[1].split("=")[1]
		},
		methods: {
			listen(event){
				if (event.keyCode === 13) {
				        this.sendComment() // 发送文本
				        event.preventDefault() // 阻止浏览器默认换行操作
				        return false
				    }
			},
			sendComment() {
				if (localStorage.getItem('flag') != "1") {
					this.$notify({
						title: '失败',
						message: '请登录之后再发送评论',
						type: 'error'
					});
				} else {
					if (this.textarea === "") {
						this.$notify({
							title: '失败',
							message: '内容不能为空！请重新操作',
							type: 'error'
						});
					} else {
						axios.post(this.reqUrl + '/sendComment', {
							userEmail: localStorage.getItem('useremail'),
							comContent: this.textarea,
							vcode: this.vcode
						}).then(res => {
							this.textarea = ""
							if (res.data.code === "200") {
								this.$notify({
									title: '成功',
									message: '成功发送一条评论',
									type: 'success'
								});
							} else {
								this.$notify({
									title: '失败',
									message: '发送一条评论失败',
									type: 'error'
								});
							}
						})
					}
				}
			},
			getComment(){
				axios.get(this.reqUrl+'/getComment',{
					params:{
						vcode:this.vcode
					}
				}).then(res=>{
					this.comments = res.data.data
					
				})
			}


		}
	}
</script>

<style>
	.comment_block {
		margin-top: 30px;
		color: hsla(0, 0%, 100%, .87);
	}

	.comment_main {
		width: 90%;
		margin: 0 auto;
	}

	.comment_title span {
		font-size: 20px;
		font-weight: 400;
	}

	.comment_box {
		margin-top: 20px;
		position: relative;
		border-radius: 6px;
		padding: 18px;
		background-color: #25252b;
	}

	.el-textarea__inner {
		background-color: #25252b;
		color: hsla(0, 0%, 100%, .87);
		overflow: auto;
		font-size: 14px;
		line-height: 20px;
		height: 60px;
		border: none;


	}

	.el-textarea .el-input__count {
		background: hsla(0, 0%, 100%, 0);
		color: hsla(0, 0%, 100%, .87);
	}

	.comment_btn {
		text-align: right;
		margin-top: 12px;
		height: 36px;
	}

	.el-drawer {
		background: #121212;
	}

	.box-card {
		background-color: #25252b;
		width: 90%;
		color: hsla(0, 0%, 100%, .87);
		margin: 0 auto;
		margin-bottom: 20px;
		border: none;
	}

	.comment_scroll {
		height: 90%;
		overflow: auto;
	}

	.comment_name {
		font-size: 14px;
		color: #ebba73;
		margin-bottom: 5px;
	}

.comment_content{
	margin: 5px 0 5px 0;
}
._title{
	font-size: 20px;
	margin: 10px;
	}
</style>
