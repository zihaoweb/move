<template>
	<view class="content">
		<scroll-view scroll-x="true" class="scrollTabBar">
			<view class="scrollItem" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class="topBarIndex==index?'active':''">{{item.name}}</text>
			</view>
		</scroll-view>

		<swiper class="swiperss" :current="topBarIndex" @change="onChangeTab">
			<swiper-item class="swiper-item" v-for="(item, index) in topBar" :key="index">
				<Card :admin="true" :list="daipaidan" v-if="topBarIndex==0"></Card>
				<Card :admin="true" :list="yipaidan" v-else-if="topBarIndex==1"></Card>
				<Card :admin="true" :list="yiweixiu" v-else-if="topBarIndex==2"></Card>
				<Card :admin="true" :list="yibohui" v-else-if="topBarIndex==3"></Card>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		adminHistory,
		awaitrepair,
		repaired,
		reject
	} from '@/api/api.js'
	import Card from '@/components/Card/Card.vue'
	export default {
		data() {
			return {
				daipaidan: [],
				yipaidan: [],
				yiweixiu: [],
				yibohui: [],
				topBarIndex: 0,
				topBar: [{
						name: '待派单'
					},
					{
						name: '已派单'
					},
					{
						name: '已维修'
					},
					{
						name: '已驳回'
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
					const res = await adminHistory()
					this.daipaidan = res
				} else if (e.detail.current == 1) {
					const res = await awaitrepair()
					this.yipaidan = res 
				} else if (e.detail.current == 2) {
					const res = await repaired()
					this.yiweixiu = res
				} else if (e.detail.current == 3) {
					const res = await reject()
					this.yibohui = res
				}
			},
			async load() {
				const res = await adminHistory()
				this.daipaidan = res
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		.swiperss {
			// height: 100%;
			flex-grow: 1;
			.swiper-item{
				overflow: scroll;
			}
		}
	}

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
</style>
