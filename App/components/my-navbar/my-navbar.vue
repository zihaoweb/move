<template>
	<view class="tabbar-container view">
		<block>
			<view class="tabbar-item view" v-for="item in tabbarList" :key="item.id"
				:class="[item.centerItem ? 'center-item' : '']" @click="changeItem(item)">
				<view class="item-top view">
					<image class="image" :src="currentItem == item.id ? item.selectIcon : item.icon"></image>
				</view>
				<view class="item-bottom view" :class="[currentItem == item.id ? 'item-active' : '']">
					<text>{{ item.text }}</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {router} from '@/router.js'
	import myavbar from '@/components/my-navbar/my-navbar.vue'
	export default {
		props: {
			currentPage: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				currentItem: 0,
				tabbarList: [{
						id: 0,
						path: '/pages/index/index',
						icon: '/static/img/index.png',
						selectIcon: '/static/img/indexSelected.png',
						text: '首页',
						centerItem: false
					},
					{
						id: 1,
						path: '/pages/Repair/Repair',
						icon: '/static/img/repairIcon.png',
						selectIcon: '/static/img/repairIcon.png',
						text: '开始报修',
						centerItem: true
					},
					{
						id: 2,
						path: '/pages/Mine/Mine',
						icon: '/static/img/my.png',
						selectIcon: '/static/img/mySelected.png',
						text: '我的',
						centerItem: false
					}
				]
			};
		},
		mounted() {
			this.currentItem = this.currentPage;
			uni.hideTabBar();
		},
		methods: {
			changeItem(item) {
				uni.switchTab({
					url: item.path
				});
			}
		}
	}
</script>

<style lang="less">
	.view {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.tabbar-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 128rpx;
		box-shadow: 0 0 5px #999;
		display: flex;
		align-items: center;
		padding: 5rpx 0;
		color: #999999;
	}

	.tabbar-container .tabbar-item {
		flex:1;
		width: 20%;
		height: 110rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.tabbar-container .item-active {
		color: #00C260;
	}

	.tabbar-container .center-item {
		display: block;
		position: relative;
	}

	.tabbar-container .tabbar-item .item-top {
		width: 70rpx;
		height: 100rpx;
		padding: 10rpx;
	}

	.tabbar-container .center-item .item-top {
		flex-shrink: 0;
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		top: -65rpx;
		left: calc(50% - 50rpx);
		border-radius: 50%;
		box-shadow: 0 0 5px #999;
		background-color: #00C260;
	}

	.tabbar-container .tabbar-item .item-top .image {
		width: 100%;
		height: 100%;
	}

	.tabbar-container .tabbar-item .item-bottom {
		font-size: 28rpx;
		width: 100%;
	}

	.tabbar-container .center-item .item-bottom {
		position: absolute;
		bottom: 5rpx;
	}
</style>