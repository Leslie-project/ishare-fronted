<template>
	<div id="search">
		<!--搜索框-->

		<div class="nav-fixed">
			<div class="serach_block">
				<div class="search_video">
					<h1 class="logo">
						<a class="s_logo" href="#"></a>
					</h1>
					<div class=ss_video>

						<select id="select" required v-model="key">
							<option value="" disabled selected hidden>search</option>
							<option value="v_time">时间</option>
							<option value="v_name">剧名</option>
							<option value="v_type">类型</option>
							<option value="v_act">演员</option>
						</select>
						<el-input placeholder="请输入内容" v-model="value" @keyup.enter.native="getSearchRec()">
						</el-input>


					</div>
				</div>
			</div>
		</div>


		<!--分页线-->
		<div class="cut_line"></div>

		<!--结果框-->
		<div class="result_block">
			<div class="result_box">
				<!-- <div class="sk-mod">
					<div class="mod-left">
						<a class="sk-pack" href="">
							<div class="pacj-cover"></div>
						</a>
					</div>
					<div class="mod-main">
						<div class="mod-header">
							<a href="">
								<h2 class="spc-title">冰雪奇缘</h2>
								<span class="spc-date">2019</span>
							</a>
							<el-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}" :max="parseInt(10)">
							</el-rate>
						</div>
						<div class="mod-info">
							<p class="mo">
								<span class="spc-lv">
									<label>上映时间：</label>
									2019-11-12
								</span>
							</p>
							<p class="mo">
								<span class="spc-lv">
									<label>导演:</label>
									珍妮弗·李/克里斯·巴克
								</span>
								<span class="spc-lv">
									<label>主演:</label>
									克里斯汀·贝尔/伊迪娜·门泽尔/乔什·盖德/乔纳森·格罗夫
								</span>
							</p>
							<p class="mo">
								<span style="overflow: hidden;">
									<label>简介:</label>
									历经严酷考验，阿伦戴尔王国终于回归往日平静。艾莎女王、安娜公主以及他们的好友雪宝、克里斯托弗、驯鹿斯文过着平静安逸的生活。可是最近一段时间，艾莎总会被一段神秘的吟唱所困扰，为了追寻真相，她义无反顾踏上了征途。担心姐姐的安...
								</span>
							</p>
						</div>
					</div>
				</div>
				 -->
				<div class="sk-mod" v-for="item in result">
					<div class="mod-left">
						<a class="sk-pack" :href="'/play.html?vcode='+item.vcode">
							<div class="pacj-cover" :style="'background-image:url(' + item.vimage +') !important;'"></div>
						</a>
					</div>
					<div class="mod-main">
						<div class="mod-header">
							<a :href="'/play.html?vcode='+ item.vcode" target="_blank">
								<h2 class="spc-title">{{item.vname}}</h2>
								<span class="spc-date">{{item.vtime}}</span>
							</a>
							<el-rate :value="parseFloat(item.vscore)" disabled show-score text-color="#ff9900" score-template="{value}" :max="parseInt(10)">
							</el-rate>
						</div>
						<div class="mod-info">
							<p class="mo">
								<span class="spc-lv">
									<label>上映时间：</label>
									{{item.vtime}}
								</span>
							</p>
							<p class="mo">
								<span class="spc-lv">
									<label>类型:</label>
									{{item.vtype}}
								</span>
								<span class="spc-lv">
									<label>主演:</label>
									{{item.vact}}
								</span>
							</p>
							<p class="mo">
								<span style="overflow: hidden;">
									<label>简介:</label>
									{{item.vprofile}}
								</span>
							</p>
						</div>
					</div>
				</div>

			</div>

			<div class="page_box" v-if="result.length != 0">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNo"
				 :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</div>
		<!--尾部 -->
		
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '../../components/Foot.vue'
	import axios from 'axios'
	import reqUrl from '../../request.js'
	export default {
		components: {
			Foot
		},
		data() {
			return {
				pageNo: 1,
				pageSize: 10,
				value: '',
				total: 100,
				score: 3.7,
				key: '',
				reqUrl: reqUrl+'/play',
				result: []
			}
		},
		mounted() {
			var typeValue = this.getUrlParam("vType")
			var searchValue = this.getUrlParam("value")
			if (typeValue != null) {
				this.value = typeValue
				this.key = 'v_type'
				this.getSearchRec()
			}else if(searchValue != null){
				this.value = searchValue
				this.getSearchRec()
			}
			
			
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageSize = val
				this.getSearchRec()

			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.pageNo = val
				this.getSearchRec()
			},
			getSearchRec() {
				if (this.key === "") {
					this.$message('请选择搜索类型');
				} else {
					axios.post(this.reqUrl + '/searchVideo', {
						key: this.key,
						value: this.value,
						pageNo: this.pageNo,
						pageSize: this.pageSize

					}).then(res => {
						var _data = res.data.data
						//console.log(_data)
						this.result = _data.records
						this.total = _data.total
						if (this.total == 0) {
							this.$message('暂无数据');
						}
					})
				}

			},
			linkUrl(vcode) {
				console.log(vcode)
				return '/play.html?vcode=' + vcode
			},
			getUrlParam: function(key) {
				// 获取参数
				var url = window.location.search;
				console.log(key)
				// 正则筛选地址栏
				var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
				// 匹配目标参数
				var result = url.substr(1).match(reg);
				//返回参数值
				return result ? decodeURIComponent(result[2]) : null;
			}


		}
	}
</script>

<style>
	body {
		background: #121212;
	}

	* {
		padding: 0;
		margin: 0;
	}

	.serach_block {
		width: 100%;
		min-height: 150px;

	}

	.search_main {
		margin-top: 150px;
		height: 150px;
		width: 100%;
	}

	.search_warpper {
		height: 150px;
		width: 90%;
		margin: 0 auto;
	}

	.cut_line {
		width: 100%;
		height: 20px;
		background: #CECECE;
	}

	.result_box {
		width: 70%;
		min-height: 500px;
		margin: 0 auto;
	}

	.page_box {
		width: 570px;
		margin: 0 auto;
		margin-bottom: 200px;
	}

	.sk-mod {
		margin-top: 20px;
		margin-bottom: 100px;
		zoom: 1;
		min-height: 1%;
	}

	.mod-left {
		width: 135px;
		float: left;
		display: inline-block;
	}

	.mod-main {
		padding-left: 157.5px;
		padding-right: 22.5px;
	}

	.sk-pack {
		vertical-align: top;
		height: 202.5px;
		width: 135px;
		position: relative;
		display: inline-block;
		color: rgba(255, 255, 255, 0.87);
	}

	.pacj-cover {
		background-image: url(https://r1.ykimg.com/050E00005DAE75DC8B743988D709A37A?x-oss-process=image/resize,w_240/quality,q_80 );
		background-size: 100%;
		height: 100%;
		background-position: 50%;
		background-repeat: no-repeat;
	}

	.mod-header {
		height: 18px;
		margin-bottom: 16px;
		color: rgba(255, 255, 255, 0.87);
	}

	.mod-header a {
		color: #999;
		text-decoration: none;

	}

	.mod-header h2 {
		display: inline;
		font-size: 18px;
		height: 18px;
		margin-right: 4px;
	}

	.mod-header .spc-date {
		vertical-align: top;
		font-weight: 500;
		font-size: 12px;
		white-space: nowrap;
		display: inline-block;
		margin-left: 5px;
	}

	.mod-info {
		margin-top: 2px;
		color: hsla(0, 0%, 100%, 0.87);
		margin-bottom: 16px;
		line-height: 20px;
		padding-top: 40px;
	}

	.spc-lv {
		margin-right: 20px;
	}

	span label {
		color: hsla(0, 0%, 100%, .37);
	}

	.mo {
		margin-bottom: 5px;
	}
</style>
