<template>
	<view class="content">
		<scroll-view scroll-x="true" class="scrollTabBar">
			<view class="scrollItem" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class="topBarIndex==index?'active':''">{{item.name}}</text>
			</view>
		</scroll-view>

		<swiper class="swiperss" :current="topBarIndex" @change="onChangeTab">
			<swiper-item class="swiper-item" v-for="(item, index) in topBar" :key="index">
				<Card :list="daipaidan" :topBarIndex="topBarIndex" v-if="topBarIndex==0"></Card>
				<Card :list="daiweixiu" :topBarIndex="topBarIndex" v-else-if="topBarIndex==1"></Card>
				<Card :list="yiweixiu" :topBarIndex="topBarIndex" v-else-if="topBarIndex==2"></Card>
				<Card :list="yichehui" :topBarIndex="topBarIndex" v-else-if="topBarIndex==3"></Card>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		history,
		awaitrepair,
		repaired,
		recall
	} from '@/api/api.js'
	import Card from '@/components/Card/Card.vue'
	export default {
		data() {
			return {
				daipaidan: [],
				daiweixiu: [],
				yiweixiu: [],
				yichehui: [],
				callData: [],
				topBarIndex: 0,
				topBar: [{
						name: '待派单'
					},
					{
						name: '待维修'
					},
					{
						name: '已维修'
					},
					{
						name: '已撤回'
					}
				]
			};
		},
		onLoad(options){
			const pageNum = options.topBarIndex
			this.topBarIndex = pageNum ? pageNum : '0'
		},
		onShow() {
			this.load()
		},
		components: {
			Card
		},
		methods: {
			changeTab(index) {
				if (this.topBarIndex == index) return
				this.topBarIndex = index;
			},
			async onChangeTab(e) {
				this.changeTab(e.detail.current)
				if (e.detail.current == 0) {
					const userInfo = await history()
					this.daipaidan = userInfo
				} else if (e.detail.current == 1) {
					const userInfo = await awaitrepair()
					this.daiweixiu = userInfo
				} else if (e.detail.current == 2) {
					const userInfo = await repaired()
					this.yiweixiu = userInfo
				} else if (e.detail.current == 3) {
					const userInfo = await recall()
					this.yichehui = userInfo
				}
			},
			async load() {
				const userInfo = await history()
				this.daipaidan = userInfo
			},
		},
		computed: {}
	}
</script>

<style lang="less" scoped>
	.content {
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;

		.scrollTabBar {
			width: 100%;
			height: 80rpx;
			white-space: nowrap;
			border-bottom: 3rpx solid #DDDDDD;

			.scrollItem {
				display: inline-block;
				padding: 10rpx 30rpx;
				font-size: 36rpx;

				.active {
					padding: 19rpx 0;
					color: #00C260;
					border-bottom: 6rpx solid #00C260;
				}
			}
		}

		.swiperss {
			flex-grow: 1;
			.swiper-item {
				overflow: scroll;
			}
		}
	}
</style>
