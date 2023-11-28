<template>
	<view class="form">
		<form action="">
			<view class="userName">
				<text>姓名</text>
				<input type="text" placeholder="请输入姓名">
			</view>
			<view class="iphonNum">
				<text>手机号码</text>
				<input type="number" placeholder="请输入您的手机号码">
			</view>
			<view class="feedBackArea">
				<text class="title">反馈意见</text>
				<textarea class="textArea" name="" id="" placeholder="请填写您宝贵的意见,感谢您的支持"></textarea>
			</view>
		</form>
		<button class="submit">提 交</button>
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
	.form {
		padding: 30rpx;
		font-size: 30rpx;
		
		.userName,
		.iphonNum {
			display: flex;
			border-bottom: 2rpx solid #ccc;
			padding-bottom: 40rpx;
			margin-bottom: 60rpx;
			box-sizing: border-box;

			text {
				width: 6rem;
			}
		}
		.feedBackArea{
			.title{
				display: inline-block;
				margin-bottom: 50rpx;
			}
			
			.textArea{
				padding: 12rpx;
				background-color: #F8F8F8;
				width: 100%;
			}
		}

	}
	.submit{
		margin-top: 40rpx;
		background: #00C260;
		box-shadow: 0 0 15rpx #00C260;
		border-radius: 40rpx;
		color: #fff;
		&:active{
			background-color: #05A451;
		}
	}
</style>
