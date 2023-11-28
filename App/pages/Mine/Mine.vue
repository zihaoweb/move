<template>
	<view v-if="isLogin" class="content">
		<view class="_header">
			<view class="userInfo">
				<view class="userAvatar">
					<image class="image" v-if="avatarUrl" :src="avatarUrl" mode=""></image>
				</view>
				<view class="text">
					<text class="tag">{{nickName}}</text>
					<text>普通用户、维修师傅、管理员</text>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="mb fffcolor ">
				<view class="box underline after" @tap="changeMyFix">
					<i class="iconfont icon-gongdan"></i>
					<text>我的报修</text>
				</view>
				<!-- <u-line></u-line> -->
				<view class="box inviteAdd fffcolor after">
					<i class="iconfont icon-shouye"></i>
					<text>邀请维修师傅加入</text>
				</view>
			</view>
			<view class="box fffcolor mb after">
				<i class="iconfont icon-erweima"></i>
				<text>分享二维码</text>
			</view>
			<view class="box fffcolor btn underline" @tap="logOut">
				退出登录
			</view>
			<!-- <u-line></u-line> -->
		</view>
		<my-navbar :current-page="2"></my-navbar>
	</view>
	<view v-else class="content">
		<view class="_header">
			<view class="userInfo" @tap='login'>
				<view class="userAvatar">
					<image class="image" src="https://gitee.com/zhz-note/image/raw/master/avait.jpg" mode=""></image>
				</view>
				<view class="text">
					<text class="tag">登录/注册</text>
					<text>登录之后才能同步您的数据</text>
				</view>
			</view>
		</view>
		<my-navbar :current-page="2"></my-navbar>
	</view>
</template>

<script>
	import {
		authVerify
	} from '@/api/api.js'
	import store from '@/store/index.js'
	import myavbar from '@/components/my-navbar/my-navbar.vue'
	export default {
		data() {
			return {
				isLogin: false,
				avatarUrl: null,
				nickName: null,
			}
		},
		async onShow() {
			if (store.state.token) {
				this.isLogin = true
			}
			this.avatarUrl = uni.getStorageSync('avatarUrl')
			this.nickName = uni.getStorageSync('nickName')
		},
		methods: {
			changeMyFix() {
				uni.navigateTo({
					url: "/pages-subpackages/MyRepair/MyRepair"
				})
			},
			login() {
				uni.navigateTo({
					url: "/pages-subpackages/Login/Login"
				})
			},
			logOut() {
				store.commit('delToken')
				
				uni.redirectTo({
					url: '/pages/Mine/Mine'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.after {
		&::after {
			content: ">";
			float: right;
			margin-right: 10rpx;
		}
	}
	
	.main{
		.underline{
			border-bottom: 1px solid #ccc;
		}
	}

	// page {
	// 	background-color: #F6F6F6;
	// 	height: 100%;
	// }

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		color: red;
	}

	.mb {
		margin-bottom: 20rpx;
	}

	.fffcolor {
		background-color: #fff;
	}

	.box {
		height: 110rpx;
		line-height: 110rpx;
	}

	.content {
		background-color: rgb(246, 246, 246);

		._header {
			background: #00C260;
			height: 300rpx;
			width: 100%;
			display: flex;
			align-items: center;
			padding-left: 40rpx;

			.userInfo {
				display: flex;

				.text {
					color: #fff;
					margin-left: 30rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.tag {
						font-size: 40rpx;
						font-weight: bold;
					}
				}

				.image {
					border-radius: 50%;
					width: 150rpx;
					height: 150rpx;
				}
			}
		}

	}
</style>