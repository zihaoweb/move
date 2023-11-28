<template>
	<view class="box2312">
		<view class="top" v-for="(item,index) in list" :key="index">
			<view class="state m">
				<img class="stateIcon" v-if="iconPath" :src="`../../static/img/${iconPath}`" alt="">
				{{repairState}}
			</view>
			<view class="uInfo m">
				<h2 class="title">报修人信息</h2>
				<view class="order f">
					<text class="text">维修单号:</text>
					<view>{{item.uuid.slice(0,10)}}</view>
				</view>
				<view class="name f">
					<text class="text">姓名:</text>
					<view>{{item.name}}</view>
				</view>
				<view class="time f">
					<text class="text">报修时间:</text>
					<view>{{item.createdAt.slice(0,10)}}</view>
				</view>
				<view class="area f">
					<text class="text">报修区域:</text>
					<view>{{item.reported}}</view>
				</view>
				<view class="desc f">
					<text class="text">详细地点</text>
					<view>{{item.desc}}</view>
				</view>
			</view>
			<view class="uInfo m">
				<h2 class="title">故障信息</h2>
				<view class="order f">
					<text class="text">故障类型:</text>
					<view>{{item.type}}</view>
				</view>
				<view class="order f">
					<text class="text">故障描述:</text>
					<view>{{item.msg}}</view>
				</view>
			</view>
			<view class="uInfo m" v-if="item.reject == 1">
				<h2 class="title">驳回信息</h2>
				<view class="order f">
					<text class="text">驳回人:</text>
					<view>张三</view>
				</view>
				<view class="order f">
					<text class="text">驳回原因:</text>
					<view>{{item.rejectreason}}</view>
				</view>
			</view>
			<view v-if="item.admin==1 && item.dispatch == 1" class="footer">
				<button class="recall" @tap="dispatch(item.uuid)" style="background-color: #00C260; color: #fff;">派单</button>
				<button class="recall" @tap="reject(item.uuid)" style="background-color: #f60; color: #fff; margin-right: 20rpx;">驳回</button>
			</view>
			<view v-else-if="item.repairer && item.repaired == 0" class="footer">
				<button class="recall" @tap="statement(item.uuid)" style="background-color: #00C260; color: #fff; ">去结单</button>
				<button class="recall" @tap="statement(item.uuid)" style="background-color: #f60; color: #fff; margin-right:10px;">退单</button>
			</view>
			<view class="" v-else>
			</view>
		</view>

	</view>
</template>

<script>
	import { statement, rejectitem } from '@/api/api.js'
	export default {
		data() {
			return {
				list: [],
				iconPathList:[
					{path:'daiweixiu.png'},
					{path:'yiweixiu.png'},
					{path:'yibohui.png'}
				],
				iconPath:''
			};
		},
		methods: {
			// 维修师傅结单
			async statement(uuid) {
				const res = await statement({ uuid })
				if(res){
					uni.navigateTo({
						url: `/pages-subpackages/Repairer/Repairer?topBarIndex=1`
					})
				}
			},
			// 管理员派单
			dispatch(uuid) {
				uni.navigateTo({
					url: `/pages-subpackages/selectDispatch/selectDispatch?uuid=${uuid}`
				})
			},
			async reject(uuid) {
				uni.navigateTo({
					url: `/pages-subpackages/rejectReason/rejectReason?uuid=${uuid}`
				})
			}
		},
		onLoad(e) {
			this.list.push(JSON.parse(decodeURIComponent(e.obj)))
		},
		computed:{
			repairState(){
				if(!this.list[0]) return 'loading';
				if(this.list[0].dispatch == 1){
					this.iconPath = this.iconPathList[0].path
					return '待派单'
				}else if(this.list[0].dispatched == 1){
					this.iconPath = this.iconPathList[0].path
					return '待维修'
				}
				else if(this.list[0].recall == 1){
					this.iconPath = this.iconPathList[1].path
					return '已撤回'
				}
				else if(this.list[0].repaired == 1){
					this.iconPath = this.iconPathList[0].path
					return '已维修'
				}
				else if(this.list[0].reject == 1){
					this.iconPath = this.iconPathList[2].path
					return '已驳回'
				}
			},
		}
	
	}
</script>

<style lang="less" scoped>
	.m {
		margin: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}

	.f {
		display: flex;
		margin: 20rpx 0;
	}

	.box2312 {
		height: 100vh;
		background-color: #f6f6f6;

		.state {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 120rpx;
		}
		.stateIcon{
			width: 50rpx;
			height: 50rpx;margin-right: 20rpx;
		}

		.top {
			.uInfo {
				.text {
					color: #ccc;
					width: 150rpx;
				}

				padding: 0 20rpx 20rpx;

				.title {
					line-height: 80rpx;
					font-weight: bold;
					border-bottom: 1px solid #ccc;
				}

			}
		}

		.footer {
			height: 160rpx;
			background-color: #fff;
			border-top: 1px solid #ccc;
			box-shadow: 15px #ddd;
			position: absolute;
			bottom: 0;
			width: 100%;

			.recall {
				width: 200rpx;
				float: right;
				top: 20rpx;
				right: 20rpx;
			}
		}
	}
</style>
