<template>
	<div class="userManage_block">
		<el-table :data="userList" border stripe style="width: 80%" height="500">
			<el-table-column fixed prop="userName" label="用户名称" width="120">
			</el-table-column>
			<el-table-column prop="userEmail" label="用户邮箱" width="120">
			</el-table-column>
			<el-table-column prop="userCreatTime" label="用户创建时间" width="120">
			</el-table-column>
			<el-table-column prop="isVip" label="是否会员" width="120">
			</el-table-column>
			<el-table-column prop="userEmail" label="用户邮箱" width="120">
			</el-table-column>
			<el-table-column prop="userPassword" label="登录密码" width="120">
			</el-table-column>
			<el-table-column prop="userComment" label="用户评论" width="240">
			</el-table-column>
			<el-table-column prop="userVideo" label="用户视频" width="120">
			</el-table-column>
			<el-table-column prop="watchingHistory" label="观看历史" width="150" sortable>
			</el-table-column>
			<el-table-column prop="userLastTime" label="上次登录时间" width="150" sortable>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import axios from 'axios'
	import reqUrl from '../../../../request.js'
	export default {
		data() {
			return {
				userList: [],
				reqUrl: reqUrl+'/admin'
			}
		},
		mounted(){
			this.getUserList()
		},
		methods:{
			getUserList(){
				axios.get(this.reqUrl+'/getUserList').then(res=>{
					this.userList = res.data.data
					console.log(this.userList)
				})
			}
		}
	}
</script>

<style>

</style>
