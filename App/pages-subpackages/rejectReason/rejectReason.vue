<template>
	<view>
		<u--textarea v-model="reason" height="100" placeholder="请输入驳回原因" ></u--textarea>
		<button class="btn" style="color: #fff;" @click="reject">提 交</button>
	</view>
</template>

<script>
	import {
		rejectitem
	} from '@/api/api.js'
	export default {
		data() {
			return {
				reason:'',
				uuid:''
			};
		},
		methods:{
			async reject(){
				const uuid = this.uuid
				const reason = this.reason
				const ans = await rejectitem({uuid,reason})
				if(ans){
					uni.navigateTo({
						url:'/pages-subpackages/Admin/Admin?topBarIndex=3'
					})
				}
			}
		},
		onLoad(options) {
			this.uuid = options.uuid
		}
	}
</script>

<style lang="less">
	page{
		background-color: #f6f6f6;
	}
	.btn {
	  margin-top: 200rpx;
	  width: 100%;
	  height: 100rpx;
	  border-radius: 50rpx;
	  background-color: #00c260;
	  box-shadow: 0 0 15rpx #00c260;
	}
</style>
