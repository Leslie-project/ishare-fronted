<template>
	<div class="module_mod">
		<div class="common_contianer">
			<div class="common_content">
				<div class="content_title">
					<h2 class="module_title">排行榜</h2>
					<div class="content_container">
						<b-tabs content-class="mt-3 " pills>
							<b-tab title="新片榜">
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="(item,index) in xinPian">
												<div class="details_box">
													<div class="box_cover">
														<a :href="'/play.html?vcode='+ item.vcode">
															<img class="vi_img" :src="item.imgUrl">
															<img :src="orderUrl[index]" class="vi_order">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vgrade}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
							<b-tab title="动作榜" lazy>
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="(item,index) in dongZuo">
												<div class="details_box">
													<div class="box_cover">
														<a href="">
															<img class="vi_img" :src="item.imgUrl">
															<img :src="orderUrl[index]" class="vi_order">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vgrade}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
							<b-tab title="剧情榜" lazy>
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="(item,index) in juQing">
												<div class="details_box">
													<div class="box_cover">
														<a href="">
															<img class="vi_img" :src="item.imgUrl">
															<img :src="orderUrl[index]" alt="" class="vi_order">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vgrade}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
							<b-tab title="喜剧榜" lazy>
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="(item,index) in xiJu">
												<div class="details_box">
													<div class="box_cover">
														<a href="">
															<img class="vi_img" :src="item.imgUrl">
															<img :src="orderUrl[index]" alt="" class="vi_order">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vgrade}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
							<b-tab title="科幻榜" lazy>
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="(item,index) in keHuan">
												<div class="details_box">
													<div class="box_cover">
														<a href="">
															<img class="vi_img" :src="item.imgUrl">
															<img :src="orderUrl[index]" alt="" class="vi_order">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vgrade}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
		<div class="cut_box"></div>
		<div class="common_contianer">
			<div class="common_content">
				<div class="content_title">
					<h2 class="module_title">正在热播</h2>
					<div class="content_container">
						<b-tabs content-class="mt-3 " pills>
							<b-tab title="">
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="item in reBo">
												<div class="details_box">
													<div class="box_cover">
														<a :href="'/play.html?vcode='+ item.vcode">
															<img class="vi_img" :src="item.vimage">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vscore}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
		<div class="cut_box"></div>
		<div class="common_contianer">
			<div class="common_content">
				<div class="content_title">
					<h2 class="module_title">口碑电影TOP榜</h2>
					<div class="content_container">
						<b-tabs content-class="mt-3 " pills>
							<b-tab title="">
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="(item,index) in kouBei">
												<div class="details_box">
													<div class="box_cover">
														<a :href="'/play.html?vcode='+ item.vcode">
															<img class="vi_img" :src="item.vimage">
															<img :src="orderUrl[index]" alt="" class="vi_order">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vscore}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
		<div class="cut_box"></div>
		<div class="common_contianer">
			<div class="common_content">

				<div class="content_title">
					<h2 class="module_title">超甜！高人气爱情电影合集</h2>
					<div class="content_container">
						<b-tabs content-class="mt-3 " pills>
							<b-tab title="">
								<b-alert show class="content_details">
									<b-container class="bv-example-row" fluid>
										<b-row>
											<b-col v-for="item in aiQing">
												<div class="details_box">
													<div class="box_cover">
														<a :href="'/play.html?vcode='+ item.vcode">
															<img class="vi_img" :src="item.vimage">
															<div class="vi_grade_box"><span class="vi_grade">{{item.vscore}}</span></div>
															<div class="vi_name">{{item.vname}}</div>
														</a>
													</div>
												</div>
											</b-col>
										</b-row>
									</b-container>
								</b-alert>
							</b-tab>
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import reqUrl from '../request.js'
	export default {
		data() {
			return {

				orderUrl: [
					'//img.alicdn.com/tfs/TB1Lrl9iHr1gK0jSZFDXXb9yVXa-96-96.png',
					'https://img.alicdn.com/tfs/TB1.2d7iKT2gK0jSZFvXXXnFXXa-96-96.png',
					'//img.alicdn.com/tfs/TB1_Ld7iKT2gK0jSZFvXXXnFXXa-96-96.png',
					'//img.alicdn.com/tfs/TB1231aiHj1gK0jSZFOXXc7GpXa-96-96.png',
					'//img.alicdn.com/tfs/TB1H.87iUY1gK0jSZFMXXaWcVXa-96-96.png',
					'//img.alicdn.com/tfs/TB1LDN8iUT1gK0jSZFrXXcNCXXa-96-96.png',
					'//img.alicdn.com/tfs/TB1WEx8iNz1gK0jSZSgXXavwpXa-96-96.png'
				],
				imgSrc: '../assets/video-order/',
				imgEnd: '.png',
				reqUrl: reqUrl,
				aiQing: [],
				dongZuo: [],
				juQing: [],
				keHuan: [],
				kouBei: [],
				reBo: [],
				xiJu: [],
				xinPian: []
			}
		},
		methods: {
			requestData() {
				axios.get(this.reqUrl+'/index/requestData').then(res => {
					var _data = res.data.data
					this.xinPian = JSON.parse(_data.xinPian)
					this.dongZuo = JSON.parse(_data.dongZuo)
					this.juQing = JSON.parse(_data.juQing)
					this.xiJu = JSON.parse(_data.xiJu)
					this.keHuan = JSON.parse(_data.keHuan)
					this.kouBei = JSON.parse(_data.kouBei)
					this.reBo = JSON.parse(_data.reBo)
					this.aiQing = JSON.parse(_data.aiQing)
					
				})
			}
		},
		mounted: function() {
			this.requestData()
		}
	}
</script>

<style>
	.module_mod a {
		color: #fff;
	}

	.common_contianer {
		margin-bottom: 40px !important;
		text-align: left;
		margin: 0 auto;
		height: 400px;
	}

	.content_title {
		width: 90%;
		margin: 0 auto;
	}

	.module_title {
		float: left;
		font-size: 26px;
		color: hsla(0, 0%, 100%, .87);
		margin-right: 20px;
	}

	.content_details {
		background: inherit;
		border: none;

	}

	.col {
		height: 315px;
		margin-right: 20px;
	}

	.details_box {
		width: inherit;
		height: inherit;
	}

	.box_cover {
		width: inherit;
		height: inherit;
	}

	.box_cover a {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		text-decoration: none;
		color: #fff;
		z-index: 2;
	}

	.vi_img {
		display: block;
		overflow: hidden;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		
	}

	.vi_img:hover {
		transition: transform .25s ease-in-out;
		transform: scale(1.03);
	}

	.vi_order {
		width: 36px;
		height: 36px;
		position: absolute;
		left: 0;
		top: 0;
	}

	.vi_grade_box {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.vi_grade {
		display: block;
		line-height: 28px;
		bottom: 0;
		text-align: right;
		font-weight: 700;
		color: #ff6f3b;
		margin-right: 6px;
	}

	.vi_name {
		overflow: hidden;
		text-overflow: ellipsis;
		
	}
</style>
