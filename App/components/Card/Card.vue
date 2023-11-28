	https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132
		oj8uq4rI3mGvrdbwOn1CcFrubiXg
		微信用户
<template>
	<view>
		<view @tap="cardClick(item)" class="content" v-for="item in list" :key="item.id">
			<view class="top">
				<view class="orderNumber" style="font-weight: bold;">
					<h2>单号：<text>{{item.uuid.slice(0,10)}}</text></h2>
				</view>
				<view v-if="item.dispatch == 1" class="state">
					<text style="color: red;">待派单</text>
				</view>
				<view v-else-if="repairer && item.repaired==1" class="state">
					<text style="color: #00C260;">已维修</text>
				</view>
				<view v-else-if="item.dispatched == 1" class="state">
					<text :style="{color:repairer ? 'red' : '#FFCD37'}">待维修</text>
				</view>
				<view v-else-if="item.reject == 1" class="state">
					<text style="color: red;">已驳回</text>
				</view>
				<view v-else-if="item.repaired == 1" class="state">
					<text style="color: #FFCD37;">待评价</text>
				</view>
				<view v-else-if="item.recall == 1" class="state">
					<text style="color: #CCC;">已撤回</text>
				</view>
			</view>
			<view class="desc">
				<view class="type">
					故障类型:<text :style="{color: admin ? 'red' : ''}">{{item.type}}</text>
				</view>
				<view >
					故障描述:{{item.desc}}
				</view>
				<view class="area">
					报修区域:{{item.reported}}
				</view>
				<view class="time">
					报修时间:{{item.createdAt.slice(0,10)}}
				</view>
			</view>
			<view class="footer" v-if="!(admin || repairer)">
				<view class="self">
					本人报修
				</view>
				<view class="fr" v-if="item.dispatch == 1 && item.reject == 0">
					<view class="BackOrder" @click.stop="recall(item.uuid)">
						撤回此单
					</view>
					<view class="urge">
						催单
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		callback
	} from '@/api/api.js'
	export default {
		name: "Card",
		data() {
			return {
			};
		},
		onShow() {},
		methods: {
			cardClick(item) {
				item['admin'] = this.admin == true ? true : false
				item['repairer'] = this.repairer == true ? true : false
				uni.navigateTo({
					url: '/pages-subpackages/OrderDesc/OrderDesc?obj=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			async recall(uuid) {
			 	const res = await callback({uuid})
				if(res){
					uni.reLaunch({
						url:"/pages-subpackages/MyRepair/MyRepair?t opBarIndex=0"
					})
				}
			}
		},
		props: ['list', 'admin', 'repairer']
	}
</script>

<style lang="less">
	.content {
		margin: 20rpx;
		padding: 10rpx;
		height: 25vh;
		border: 3rpx solid #ddd;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;

		.top {
			flex: 1;
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #ccc;
			align-items: center;

			.state {
				margin-right: 30rpx;
			}
		}

		.desc {
			flex: 3;
			display: flex;
			flex-direction: column;

			justify-content: space-around;

		}

		.footer {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.self {
				color: #9DD8F7;
				background-color: #E9F7FF;
				padding: 10rpx 20rpx;
			}

			.ohter {
				color: #F8A767;
				background-color: #FFF4E4;
				padding: 10rpx 20rpx;

			}

			.fr {
				display: flex;

				.BackOrder,
				.urge {
					border: 1px solid #ccc;
					border-radius: 40rpx;
					margin-right: 20rpx;
					padding: 10rpx 20rpx;

					&:active {
						background-color: #ccc;
					}
				}
			}
		}
	}
</style>
