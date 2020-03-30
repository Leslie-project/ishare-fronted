<template>
	<div id='app' style="background: #121212;">
		<!--顶部-->
		<Navbar></Navbar>
		<!--轮播-->

		<Swip></Swip>


		<div class="cut_box"></div>
		<!--主体-->
		<Type ></Type>
		<div class="cut_box"></div>
		<Body></Body>
		<!--底部-->
		<Foot></Foot>
	</div>
</template>

<script>
	import Swip from './components/Swip.vue'
	import Navbar from './components/NavBar.vue'
	import Type from './components/Type.vue'
	import Body from './components/Body.vue'
	import Foot from './components/Foot.vue'
	export default {
		methods: {
			
		},
		components: {
			Swip,
			Navbar,
			Type,
			Body,
			Foot
		}
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
	.cut_box{
		height: 25px;
		
	}
</style>
