<template>
	<view class="box123123">
		<picker class="container" @change="bindPickerChange" :value="picker" :range="list" range-key="nickName">
			<view class="main">
				<view style="font-size: 18px;">{{list[picker].nickName}}</view>
				<view class="select">
					请选择维修师傅 >
				</view>
			</view>
		</picker>
		<button class="btn" @tap="submit">确认派单</button>
	</view>
</template>
<script>
	import {
		dispatch,
		repairerList
	} from '@/api/api.js'
	export default {
		data() {
			return {
				list: [],
				picker: 0,
				uuid: ''
			};
		},

		onLoad(options) {
			this.uuid = options.uuid
		},
		async onShow() {
			const res = await repairerList()
			res.map((t, index) => {
				this.list.push({
					'nickName': `维修师傅${index+1}`,
					'openid': t.openid
				})
			})
		},
		methods: {
			bindPickerChange: function(e) {
				this.picker = e.detail.value;
			},
			async submit() {
				const openid = this.list[this.picker].openid
				const uuid = this.uuid
				const ans = await dispatch({ uuid, openid })
				if(ans){
					uni.navigateTo({
						url:"/pages-subpackages/Admin/Admin?topBarIndex=1"
					})
				}
			},
		}
	};
</script>

<style lang="less" scoped>
	.container {
		margin: 40rpx;
		font-size: 40rpx;

		.main {
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			line-height: 100rpx;

			.select {
				color: #999;
			}
		}
	}

	.btn {
		color: #fff;
		background-color: #00C260;
		box-shadow: 0px 0px 10px 0px #00C260;
		margin-top: 20rpx;
		border-radius: 50rpx;
		height: 100rpx;
		line-height: 100rpx;
	}
</style>
