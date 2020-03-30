<template>
	<div class="type-container">
		<div class="container-nav">
			<div class="nav-content">
				<div class="content-tabs">					
					<div class="tabs-title">片库
						<b-link>&nbsp;&nbsp;&nbsp;全部
							<b-icon icon="cursor">::before</b-icon>
						</b-link>
					</div>
					<div class="tabs-wrap">
						<div class="tabs-page">
							<b-link>最近更新</b-link>
							<b-link>最多评论</b-link>
						</div>
						<div class="tabs-page">
							<b-link>最受欢迎</b-link>
							<b-link>最近上映</b-link>
						</div>
						<div class="cut-line">

						</div>
					</div>

				</div>
				<div class="content-tabs">
					<div class="tabs-title">
						热门
					</div>
					<div class="tabs-wrap">
						<div class="tabs-page">
							<b-link>院线热映</b-link>
							<b-link>网络电影</b-link>
							
						</div>
						<div class="cut-line">
						
						</div>
						
					</div>
				</div>
				<div class="content-tabs">
					<div class="tabs-title">类型
						<b-link>&nbsp;&nbsp;&nbsp;全部
							<b-icon icon="cursor">::before</b-icon>
						</b-link>
					</div>
					<div class="tabs-wrap">
						<div class="tabs-page">
							<b-link href="/search.html?vType=武侠">武侠</b-link><div></div>
							<b-link href="/search.html?vType=警匪">警匪</b-link>
						</div>
						
						<div class="tabs-page">
							<b-link href="/search.html?vType=犯罪" >犯罪</b-link><div></div>
							<b-link href="/search.html?vType=科幻">科幻</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link href="/search.html?vType=战争">战争</b-link><div></div>
							<b-link href="/search.html?vType=恐怖">恐怖</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link href="/search.html?vType=惊悚">惊悚</b-link><div></div>
							<b-link href="/search.html?vType=记录片">记录片</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link href="/search.html?vType=警匪">冒险</b-link><div></div>
							<b-link href="/search.html?vType=警匪">悬疑</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link href="/search.html?vType=爱情">爱情</b-link><div></div>
							<b-link href="/search.html?vType=剧情">剧情</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link href="/search.html?vType=历史">历史</b-link><div></div>
							<b-link href="/search.html?vType=动作">动作</b-link>
							
						</div>
						<div class="cut-line">
						
						</div>
					</div>
				</div>
				<div class="content-tabs">
					<div class="tabs-title">地区
						<b-link>&nbsp;&nbsp;&nbsp;全部
							<b-icon icon="cursor">::before</b-icon>
						</b-link>
					</div>
					<div class="tabs-wrap">
						<div class="tabs-page">
							<b-link>中国大陆</b-link>
							<b-link>中国香港</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link>中国台湾</b-link>
							<b-link>韩国</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link>日本</b-link><div></div>
							<b-link>美国</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link>法国</b-link><div></div>
							<b-link>英国</b-link>
							
						</div>
						<div class="tabs-page">
							<b-link>德国</b-link><div></div>
							<b-link>意大利</b-link>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.type-container {
		height: 100px;
		text-align: left;
		margin: 0 auto;
		
	}
	.type-container a{
		color: #fff;
		text-decoration: none;
		
	}
	.type-container a:hover{
		color: #007BFF;
	}
	.container-nav {
		height: 90px;
		width: 100%;
		font-size: 16px;
		line-height: 24px;
		margin: 2px 0 26px;
		overflow: hidden;
		z-index: 2;
		text-shadow: 0 1px 2px rgba(0, 0, 0, .4);
	}
	.nav-content {
		overflow: hidden;
		width: 90%;
		height: 100%;
		margin: 0 auto;
	}
	.content-tabs {
		float: left;
	}
	.tabs-title {
		height: 22px;
		color: hsla(0, 0%, 100%, .87);
		margin-bottom: 10px;
	}

	.tabs-wrap {
		height: 56px;
	}

	.tabs-page {
		float: left;
		margin-right: 40px;
		width: 64px;
		height: 60px;
	}

	.cut-line {
		float: right;
		width: 1px;
		height: 60px;
		margin: 0 40px -10px 0;
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0, hsla(0, 0%, 100%, 0)), color-stop(.31, hsla(0, 0%, 100%, .5)), color-stop(.56, hsla(0, 0%, 100%, .5)), color-stop(1, hsla(0, 0%, 100%, 0)));
	}
</style>
