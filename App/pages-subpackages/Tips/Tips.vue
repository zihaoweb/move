<template>
	<view class="content">
		<text class="title">有问题请联系我</text>
		<image src="https://gitee.com/zhz-note/image/raw/master/QR.jpg" mode="aspectFit" lazy-load="true"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.title{
		display: flex;
		justify-content: center;
		font-size: 60rpx;
	}
	.content{
		// margin
	}
	image{
		width: 750rpx;
		height: 900rpx;
	}
</style>
