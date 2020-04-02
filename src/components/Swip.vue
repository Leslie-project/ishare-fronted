<template>
	<div>
		<b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024"
		 img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
			<a :href="item.playUrl" v-for="item in reqData">
				<b-carousel-slide :caption="item.vname" :text="item.vintro" :img-src="item.imgUrl"></b-carousel-slide>
			</a>
		</b-carousel>
	</div>
</template>

<script>
	import axios from 'axios'
	import reqUrl from '../request.js'
	export default {
		data() {
			return {
				slide: 0,
				sliding: null,
				reqUrl: reqUrl,
				reqData: []
			}
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true
				
			},
			onSlideEnd(slide) {
				this.sliding = false
			},
			requsetCarouse: function() {
				axios.get(this.reqUrl+'/index/requestCarouse').then(res => {
					//console.log(res.data.data)
					this.reqData = res.data.data
					//console.log(this.reqData)
				
				})
			},
			
			
		},
		mounted: function() {
			this.requsetCarouse()
			
		}
	}
</script>

<style>
</style>
