<template>
	<view class="content">
		<view class="title">
			操作教程
		</view>
		<!-- <view class="item">
			<view class="box">
				<video src="@/static/video/1.mp4"></video> <text class="title">教程1</text>
			</view>
			<view class="box">
				<video src="@/static/video/2.mp4"></video><text class="title">教程2</text>
			</view>
			<view class="box">
				<video src="@/static/video/3.mp4"></video><text class="title">教程3</text>
			</view>
			<view class="box">
				<video src="@/static/video/4.mp4"></video><text class="title">教程4</text>
			</view>
		</view> -->
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
	page{
		background-color: #F6F6F6;
	}
	.title{
		font-size: 60rpx;
		text-align: center;
	}
	
	.item{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.box{
			width: 45%;
			.title{
				display: flex;
				justify-content: center;
				font-size: 40rpx;
			}
			video{
				width: 100%;
			}
		}
	}
</style>
