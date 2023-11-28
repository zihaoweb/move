<template>
	<view class="content">
		<view class="box">
			<u--form labelPosition="left" :rules="rules" :model="model1" ref="form">
				<u-form-item labelWidth="6rem" label="姓名" prop="userInfo.name" borderBottom ref="item">
					<u--input v-model="model1.userInfo.name" placeholder="请输入姓名" border="none"></u--input>
				</u-form-item>

				<u-form-item labelWidth="6rem" label="手机号码" prop="userInfo.phoneNum" borderBottom ref="item">
					<u--input v-model="model1.userInfo.phoneNum" placeholder="请输入电话号码" border="none"></u--input>
				</u-form-item>

				<u-form-item labelWidth="6rem" label="报修区域" prop="userInfo.reported" borderBottom
					@click="showReported = true; " ref="item">
					<u--input v-model="model1.userInfo.reported" disabled disabledColor="#ffffff" placeholder="请选择报修区域"
						border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>

				<u-form-item labelWidth="6rem" label="详细地点" prop="userInfo.desc" ref="item" borderBottom>
					<u--input v-model="model1.userInfo.desc" border="none"></u--input>
				</u-form-item>

				<u-form-item labelWidth="6rem" label="故障类型" prop="userInfo.type" borderBottom @click="showType = true; "
					ref="item">
					<u--input v-model="model1.userInfo.type" disabled disabledColor="#ffffff" placeholder="请选择报修区域"
						border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>

				<u-form-item class="mtextArea" labelWidth="6rem" label="故障描述" prop="userInfo.msg" ref="item"
					borderBottom>
					<u--textarea style="background-color: #F6F6F6;" v-model="model1.userInfo.msg" border="none"
						placeholder="请输入内容"></u--textarea>
				</u-form-item>

			</u--form>

			<u-action-sheet :show="showReported" :actions="actions1" title="请选择报修区域" @close="showReported = false"
				@select="reportedSelect">
			</u-action-sheet>
			<u-action-sheet :show="showType" :actions="actions2" title="请选择报修区域" @close="showType = false"
				@select="typeSelect">
			</u-action-sheet>
			<button class="btn" style="color: #fff;" @click="submit">提 交</button>
		</view>
		<my-navbar :current-page="1"></my-navbar>
	</view>
</template>

<script>
	import myavbar from '@/components/my-navbar/my-navbar.vue'
	import {
		repair,
		building
	} from "@/api/api.js";
	export default {
		data() {
			return {
				showReported: false,
				showType: false,
				model1: {
					userInfo: {
						name: "张三",
						phoneNum: "19712571702",
						reported: "静一",
						desc: "123",
						type: "原因一",
						msg: "456",
					},
				},
				actions1: [],
				actions2: [{
						name: "原因一",
					},
					{
						name: "原因二",
					},
					{
						name: "原因三",
					},
				],
				rules: {
					"userInfo.name": {
						type: "string",
						required: true,
						min: 2,
						max: 4,
						message: "请填写姓名",
						trigger: ["blur", "change"],
					},
					"userInfo.phoneNum": [{
							required: true,
							message: "请输入手机号码",
						},
						{
							pattern: /^1[3456789]\d{9}$/,
							message: "请输入正确的手机号码",
						},
					],
					"userInfo.reported": {
						type: "string",
						required: true,
						message: "请选择报修区域",
						trigger: ["blur", "change"],
					},
					"userInfo.desc": {
						type: "string",
						required: true,
						message: "请填写详细地址",
						trigger: ["blur", "change"],
					},
					"userInfo.type": {
						type: "string",
						required: true,
						message: "请填写故障类型",
						trigger: ["blur", "change"],
					},
					"userInfo.msg": {
						type: "string",
						required: true,
						message: "请填写故障描述",
						trigger: ["blur", "change"],
					},
				},
				radio: "",
				switchVal: false,
			};
		},
		mounted() {
			building().then(res => {
				res.map(item => {
					this.actions1.push({
						name: item.name
					})
				})
			}).catch(err => {
				console.log(err);
			})
		},
		methods: {
			reportedSelect(e) {
				this.model1.userInfo.reported = e.name;
				this.$refs.form.validateField("userInfo.reported");
			},
			typeSelect(e) {
				this.model1.userInfo.type = e.name;
				this.$refs.form.validateField("userInfo.type");
			},
			submit() {
				this.$refs.form
					.validate()
					.then(async (res) => {
						await repair(this.model1.userInfo);
						uni.$u.toast("提交成功");
						uni.navigateTo({
							url: '/pages-subpackages/MyRepair/MyRepair'
						})
					})
					.catch((errors) => {
						const msg = errors[0].message;
						uni.$u.toast("出错了");
					});
			},
		},
	};
</script>

<style lang="less" scoped>
	.btn {
		margin-top: 200rpx;
		width: 100%;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: #00c260;
		box-shadow: 0 0 15rpx #00c260;
	}

	page {
		background-color: #f6f6f6;
	}

	.content {
		padding: 20rpx 0;

		.box {
			background-color: #fff;
			padding: 0 20rpx;
		}
	}
</style>