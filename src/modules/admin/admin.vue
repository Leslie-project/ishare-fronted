<template>
	<div id='admin'>
		<router-view></router-view>
	</div>
	

</template>

<script>
	import Login from './components/login.vue'
	import Content from './components/adminContent.vue'
	export default {
		components: {
			Login,
			Content
		}
	}
</script>

<style>
	body {
		background: rgb(18, 18, 18);
	}
</style>
