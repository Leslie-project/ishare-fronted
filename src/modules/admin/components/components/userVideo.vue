<template>
	<div class="userVideo_block">
		<el-table :data="userVideos" border style="width: 80%" :row-class-name="tableRowClassName" height="500">
			<el-table-column fixed prop="reVideoTime" label="上传日期"sortable width="180">
			</el-table-column>
			<el-table-column prop="userName" label="用户名称" width="120">
			</el-table-column>
			<el-table-column prop="userEmail" label="用户邮箱"width="120">
			</el-table-column>
			<el-table-column prop="passTime" label="审核通过时间"width="140">
			</el-table-column>
			<el-table-column prop="reVideoName" label="视频名称"width="120">
			</el-table-column>
			<el-table-column prop="reVideoSize" label="视频大小"width="120">
			</el-table-column>
			<el-table-column prop="reVideoProfile" label="视频简介"width="120">
			</el-table-column>
			<el-table-column prop="reVideoState" label="审核状态"width="120" sortable>
			</el-table-column>
			<el-table-column prop="failCause" label="审核不通过原因"width="180">
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
		    userVideos: [],
			reqUrl:reqUrl+'/admin'
		  }
		},
		mounted() {
			this.getUserVideoList()
		},
	    methods: {
			
	      tableRowClassName({row, rowIndex}) {
			  
	        if (row.reVideoState === "01") {
	          return 'success-row';
	        } else if(row.reVideoState === "00"){
	          return 'warning-row';
	        }
	        
	      },
		  getUserVideoList(){
			  axios.get(this.reqUrl+'/getUserVideoList').then(res=>{
				  this.userVideos=res.data.data
			  })
		  }
	    },
	    
	  }
</script>

<style>
	 .el-table .warning-row {
	    background: oldlace;
	  }
	
	  .el-table .success-row {
	    background: #f0f9eb;
	  }
</style>
