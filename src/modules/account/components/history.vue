<template>
	<div class="history_block">
		<div class="record">
			<div class="record_list" v-if="todays.length!=0">
				<div class="record_title ">
					<span class="data_today" style="color: #0d9bff;">今天</span>
				</div>
				<div class="record_item" v-for="item in todays">
					<div class="item_box">
						<div class="item_img">
							<div class="item_size">{{changeType(item.vlength)}}</div>
							<a>
								<img :src="item.vimage">
							</a>
						</div>
						<div class="item_name">
							<a>
								{{item.vname}} <span>看至{{item.vwatchPercent}}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="record_list" v-if="earlierdays.length!=0">
				<div class="record_title">
					<span>更早</span>
				</div>
				<div class="record_item" v-for="item in earlierdays">
					<div class="item_box">
						<div class="item_img">
							<div class="item_size">{{changeType(item.vlength)}}</div>
							<a>
								<img :src="item.vimage" alt="">
							</a>
						</div>
						<div class="item_name">
							<a>
								{{item.vname}} <span>看至{{item.vwatchPercent}}</span>
							</a>
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
				todays: [],
				earlierdays: [],
				data:[],
				reqUrl: 'http://localhost:8080/youqu/account'
			}
		},
		mounted() {
			var date = new Date()
			var month = date.getMonth() + 1
			if (parseInt(month) < 10) {
				month = "0" + month
			}
			var _date = date.getFullYear() + "-" + month + "-" + date.getDate()
			
			axios.get(this.reqUrl + '/watchHistory', {
				params: {
					email: localStorage.getItem('useremail')
				}
			}).then(res => {
				var data = res.data.data
				for (var i in data) {
					var dateTime = data[i].watchTime.substring(0, 10)
					if (dateTime === _date) {
						this.todays.push(data[i])
					} else {
						this.earlierdays.push(data[i])
					}
				}
				
			})
		},
		methods: {
			changeType(size) {
				var hour = Math.floor(size/3600)
				var min = Math.floor(size%3600)
				return hour+":"+Math.floor(min/60)+":"+min%60
				
			}
		}
	}
</script>

<style>
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

	.record_item {
		width: 222px;
		padding: 0 12px 0 0;
		float: left;margin-right: 20px;
	}

	.item_name {
		margin: 10px 0 20px 0;
	}

	.item_name a {
		color: hsla(0, 0%, 100%, .87);
	}

	.item_name span {
		color: hsla(0, 0%, 100%, .37);
		float: right;
	}

	.item_name a:hover {
		color: #0048AB;
		cursor: pointer;
	}

	.item_img a img {
		display: block;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 4px;
		transition: all 0.8s;
		cursor: pointer;
	}

	.item_img a img:hover {
		transform: scale(1.03);
	}

	.item_size {
		position: absolute;
		color: #000;
		font-weight: 700;
	}
</style>
