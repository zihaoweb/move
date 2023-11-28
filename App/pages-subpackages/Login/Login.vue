<template>
	<view class="content">
		<image class="image" src="https://gitee.com/zhz-note/image/raw/master/avait.jpg" mode=""></image>
		<text class="title">报修云</text>
		<u-line></u-line>
		<view class="text">
			<text>我们需要获取你的一下信息</text>
			<text style="color: #afafaf;">你的公开信息（昵称，头像等）</text>
		</view>
		<view class="btn" @click="login">
			<i class="iconfont icon-weixin"></i>
			<text>授权微信用户信息</text>
		</view>
	</view>
</template>

<script>
	import request from '@/utils/index.js'
	import store from '@/store/index.js'
	export default {
		data() {
			return {}
		},
		methods: {
			login() {
				var that = this;
				uni.showModal({
					mask: true,
					title: "温馨提示",
					contnet: '授权微信登录才能正常使用小程序功能',
					success(res) {
						if (res.confirm) {
							uni.getUserProfile({
								desc: "获取你的昵称、头像",
								success: async (userRes) => {
									if (userRes.errMsg == 'getUserProfile:ok' && userRes.userInfo !== undefined) {
										var userInfo = {
											avatarUrl: userRes.userInfo.avatarUrl,
											nickName: userRes.userInfo.nickName
										}
										uni.login({
											provider: 'weixin',
											success(loginAuth) {
												userInfo['code'] = loginAuth.code
												var path = '/admin/login'
												request(path, 'POST', userInfo).then(ans => {
													const {token} = ans;
													const {admin} = ans.data;
													store.commit('setToken', token)
													store.commit('setAdmin', admin)
													uni.setStorageSync('avatarUrl',userInfo.avatarUrl)
													uni.setStorageSync('nickName',userInfo.nickName)
													uni.switchTab({
														url: '../Mine/Mine'
													})
												})
											}
										})
									}
								}
							})
						}
					}
				})
				console.log('登录')
			},

			getUserOpenId(userInfo) {

			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

		.image {
			width: 170rpx;
			height: 170rpx;
			margin-bottom: 10rpx;
		}

		.title {
			margin-bottom: 100rpx;

		}
	}

	.text {
		margin: 40rpx 0;
		display: flex;
		flex-direction: column;
	}

	page {
		padding: 40rpx 40rpx;
		height: vh;
	}

	.icon-weixin {
		font-size: 40rpx;
		margin-right: 10rpx;
	}

	.btn {
		color: #fff;
		width: 90%;
		height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #00C260;
		border-radius: 45rpx;
		box-shadow: 0 0 15rpx #00C260;
		margin-top: 60rpx;
	}
</style>
