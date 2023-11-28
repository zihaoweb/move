<template>
	<view>
		<view class="header">
			<view class="username">
				<text class="title">姓名</text>
				<input type="text" placeholder="请填写姓名">
			</view>
			<u-line color="#666"></u-line>
			<view class="phoneNum">
				<text class="title">手机号码</text>
				<input type="text"  placeholder="请填写手机号">
			</view>
		</view>
		<view class="content">
			<view class="title">
				反馈说明
			</view>
			<textarea rows="5" placeholder="请填写您宝贵的意见,感谢您的支持"></textarea>
		</view>
		
		<view class="btn">
			<button class="submit">提 交</button>
		</view>
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
	.header{
		display: flex;
		flex-direction: column;
		padding: 0 40rpx;
		background-color: #fff;
		margin-bottom: 40rpx;
		.username, .phoneNum{
			display: flex;
			height: 100rpx;
			align-items: center;
			font-size: 30rpx;
		}
		.title{
			width: 6em;
		}
	}
	.content{
		display: flex;
		flex-direction: column;
		padding: 20rpx 40rpx;
		background-color: #fff;
		.title{
			font-size: 30rpx;
			margin-bottom: 20rpx;
		}
		textarea{
			background-color: #F6F6F6;
			width: 100%;
			border-radius: 10rpx;
			padding: 10rpx;
			box-sizing: border-box;
		}
	}
	.btn{
		padding: 0 30rpx;
		button{
			background-color: #00C260;
			border-radius: 50rpx;
			color: #fff;
			box-shadow: 0 0 20rpx #00C260;
			&:active{
				background-color: #05A451;
			}
		}
	}
</style>
