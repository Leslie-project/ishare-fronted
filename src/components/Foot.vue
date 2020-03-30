<template>
	<div class="foot_box">
		<div class="foot_container">
			<div class="foot_container_content">
				<div class="content_item">
					<div class="item_title">热门</div>
					<div class="item_detail">
						<div class="item_wrap">
							<el-link type="info" :underline="false">武侠</el-link>
							<el-link type="info" :underline="false">犯罪</el-link>
							<el-link type="info" :underline="false">战争</el-link>
							<el-link type="info" :underline="false">惊悚</el-link>
							<el-link type="info" :underline="false">冒险</el-link>
							<el-link type="info" :underline="false">爱情</el-link>
							<el-link type="info" :underline="false">历史</el-link>
						</div>
						<div class="item_wrap">
							<el-link type="info" :underline="false">警匪</el-link>
							<el-link type="info" :underline="false">科幻</el-link>
							<el-link type="info" :underline="false">恐怖</el-link>
							<el-link type="info" :underline="false">动作</el-link>
							<el-link type="info" :underline="false">悬疑</el-link>
							<el-link type="info" :underline="false">剧情</el-link>
							<el-link type="info" :underline="false">记录片</el-link>
						</div>
					</div>
				</div>
				<div class="content_item">
					<div class="item_title">用户协议</div>
					<div class="item_detail">
						<div class="item_wrap">
							<el-link type="info" :underline="false">用户协议</el-link>
							<el-link type="info" :underline="false">历史协议文本</el-link>
						</div>
						<div class="item_wrap">
							<el-link type="info" :underline="false">隐私政策</el-link>
							<el-link type="info" :underline="false">账号注销协议</el-link>
						</div>
					</div>
				</div>
				<div class="content_item item2">
					<div class="item_title">服务</div>
					<div class="item_detail">
						<div class="item_wrap">
							<el-link type="info" :underline="false">侵权投诉</el-link>
							<el-link type="info" :underline="false">广告服务</el-link>
							<el-link type="info" :underline="false">管理员服务</el-link>
						</div>
						<div class="item_wrap">
							<el-link type="info" :underline="false">在线反馈</el-link>
							<el-link type="info" :underline="false">联系我们</el-link>
							<el-link type="info" :underline="false">关于我们</el-link>
						</div>
					</div>
				</div>

			</div>
			<div class="copyright">
				如有侵权请联系&nbsp;|&nbsp;电话:13630442046&nbsp;|&nbsp;邮箱：1072965316@qq.com&nbsp;|&nbsp;Copyright©2020 Ishare ishare.com
				版权所有
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.foot_box {
		background-color: #25252b;
		position: relative;
		bottom: 0;
		width: 100%;
		height: 150px;
		color: hsla(0, 0%, 100%, .38);
		font: 12px/20px pingfang SC, Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", helvetica, arial, verdana, tahoma, sans-serif;
	}

	.foot_container {
		margin: 0 auto;
		width: 90%;
	}

	.foot_container_content {
		padding-top: 30px;
		margin: 0 auto;
		text-align: left;
		overflow: hidden;
	}

	.content_item {
		float: left;
		margin-right: 17%;
	}

	.item_title {
		font-size: 16px;
		line-height: 20px;
		margin-bottom: 10px;
		color: hsla(0, 0%, 100%, .38);
	}

	.item2 {
		margin-right: 1%;
		float: right;
	}

	.item_wrap a {
		color: hsla(0, 0%, 100%, .6);
		margin-right: 20px;
		cursor: pointer;
		text-decoration: none;
	}

	.el-link.el-link--info {
		color: hsla(0, 0%, 100%, .6);
	}

	.el-link.el-link--info:hover {
		color: #007BFF;
	}
	.copyright{
		line-height: 20px;
		font-size: 14px;
		font-weight: 400;
		padding-top: 20px;
		margin: 0 auto;
		text-align: center;
	}
</style>
