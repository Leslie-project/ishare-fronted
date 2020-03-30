<template>
	<div id="play">
		<Navbar></Navbar>
		<Playmain></Playmain>
		<Youlike></Youlike>
		<Comment></Comment>
		<div class="cut-box"></div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Navbar from '../../components/NavBar.vue'
	import Playmain from './Playmain.vue'
	import Foot from '../../components/Foot.vue'
	import Youlike from './Youlike.vue'
	import Comment from './Comment.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			Navbar,
			Playmain,
			Foot,
			Youlike,
			Comment
		}
	}
</script>
<style scoped>
	#play {
		background: #121212;
		padding-top: 1px;
	}

	.cut-box {
		height: 100px;
	}
</style>
