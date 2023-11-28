<template>
	<view class="content">
		<view class="swiper_box">
			<swiper style="height: 330rpx;" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="https://gitee.com/zhz-note/image/raw/master/swiper1.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://gitee.com/zhz-note/image/raw/master/swiper2.jpg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="main">
			<view class="top-cord">
				<view class="left" @tap="changeMyFix">
					<image src="https://gitee.com/zhz-note/image/raw/master/m-fix.png" mode=""></image>
				</view>
				<view class="right">
					<image @tap="repairer" src="https://gitee.com/zhz-note/image/raw/master/repair.png" mode=""></image>
					<image @tap="admin" src="https://gitee.com/zhz-note/image/raw/master/admin.png" mode=""></image>
				</view>
			</view>
			<view class="down-cord">
				<view class="item" @tap="changeData">
					<image src="https://gitee.com/zhz-note/image/raw/master/1.png" mode=""></image>
					<text class="txt">数据统计</text>
				</view>
				<view class="item" @tap="changeSuggest">
					<image src="https://gitee.com/zhz-note/image/raw/master/2.png" mode=""></image>
					<text class="txt">意见统计</text>
				</view>
				<view class="item" @tap="changeVideo">
					<image src="https://gitee.com/zhz-note/image/raw/master/3.png" mode=""></image>
					<text class="txt">视频教程</text>
				</view>
				<view class="item" @tap="chageTipMsg">
					<image src="https://gitee.com/zhz-note/image/raw/master/4.png" mode=""></image>
					<text class="txt">消息提醒</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<h2>最新动态</h2>
			<view class="content">
				<view class="img" @tap="changenItroduce">
					<image src="https://gitee.com/zhz-note/image/raw/master/footerImg.jpg" mode=""></image>
				</view>
				<view class="right">
					<view class="title">
						报修云产品介绍
					</view>
					<view class="time">
						<text class="tag">公告通知</text>
						<text>2023-03-01</text>
					</view>
				</view>
			</view>
		</view>
		<my-navbar :current-page="0"></my-navbar>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {

		data() {
			return {

			};
		},
		methods: {
			admin() {
				if (store.state.isAdmin) {
					uni.navigateTo({
						url: "/pages-subpackages/Admin/Admin"
					})
				} else {
					uni.showToast({
						icon: "none",
						title: "无权限"
					})
				}

			},
			repairer() {
				uni.navigateTo({
					url: "/pages-subpackages/Repairer/Repairer"
				})
			},
			changeMyFix() {
				uni.navigateTo({
					url: "/pages-subpackages/MyRepair/MyRepair"
				})
			},
			changeData() {
				uni.navigateTo({
					url: "/pages-subpackages/Analysis/Analysis"
				})
			},
			changenItroduce() {
				uni.navigateTo({
					url: "/pages-subpackages/Introduce/Introduce"
				})
			},
			changeSuggest() {
				uni.navigateTo({
					url: "/pages-subpackages/Suggestion/Suggestion"
				})
			},
			changeVideo() {
				uni.navigateTo({
					url: "/pages-subpackages/Video/Video"
				})
			},
			chageTipMsg() {
				uni.navigateTo({
					url: "/pages-subpackages/Tips/Tips"
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding: 20rpx;

		.swiper_box {
			margin-bottom: 20rpx;
			height: 100%;
			border-radius: 20rpx;

			uni-image {
				height: 100%;
			}

			.swiper-item {
				height: 100%;

				img {
					height: 100%;
				}
			}

			image {
				border-radius: 10rpx;
				width: 100%;
				height: 100%;
			}
		}

		.main {
			margin-bottom: 20rpx;
		}

		.top-cord {
			margin-bottom: 20rpx;
			display: flex;
			justify-content: space-between;

			// flex-direction: column;
			uni-image {
				width: 100%;
				height: 280rpx;
			}

			.left {
				width: 48%;
				height: 289rpx;
				flex: 0 0 49%;

				uni-image {
					width: 100%;
					// hheight: 100% !important;
				}
			}

			.right {
				width: 49%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 0 0 49%;

				image {
					height: 138rpx;
				}
			}

			image {
				width: 100%;
				height: 100%;
			}
		}

		.down-cord {
			display: flex;
			justify-content: space-between;

			.item {
				flex: 0 0 25%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 150rpx;
				width: 150rpx;
				flex-direction: column;

				image {
					width: 100rpx;
					height: 100rpx;
				}
			}

		}

		.footer {
			h2 {
				margin-bottom: 20rpx;
			}

			.content {
				padding: 0;
				display: flex;

				.img {
					margin-right: 20rpx;

					image {
						border-radius: 10rpx;
						width: 200rpx;
						height: 200rpx;
					}
				}

				.right {
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-size: 40rpx;
						font-weight: 300;
					}

					.tag {
						margin-right: 20rpx;
					}
				}
			}
		}
	}
</style>