<template>
	<view class="content">
		<view class="header">
			<text class="title">累计报修量(单)</text>
			<text class="count">22</text>
		</view>
		<!-- <view id="chart"> -->
		<echarts :option="option" id="myChart" style="height: 110vw;margin-left: 2vw;width: 100%;padding: 4vw 0 0 0;">
		</echarts>
		<!-- </view> -->
	</view>

</template>

<script>
	import echarts from '@/components/Echarts/Echarts.vue';
	export default {
		components: {
			echarts
		},
		data() {
			return {
				option: {}
			}
		},
		methods: {
			logstatrt() {
				// console.log('初次调用');
				this.option = {
					notMerge: true,
					backgroundColor: "#F8FAFF ",
					tooltip: {
						trigger: 'axis',
						showContent: this.showContent,
						axisPointer: {
							type: 'shadow',
							label: {
								show: true
							},
						},
					},
					toolbox: {
						padding: [200, 0, 0, 0],
						show: true,
						feature: { //工具配置项
							mark: {
								show: true
							},
							dataView: { //数据视图工具，可以展现当前图表所用数据
								show: true, //是否显示该工具
								readOnly: false //是否不可编辑
							},
							magicType: {
								show: true, //是否显示该工具
								type: ['line', 'bar'] //启用的动态类型
							},
							restore: {
								show: true //是否显示该工具
							},
							saveAsImage: {
								show: true //是否显示该工具
							}
						}
					},
					calculable: false, //是否显示拖拽的手柄
					// itemHeight: 0,
					legend: { //图例组件
						data: [{
							name: '进入数',
						}, {
							name: '出去数'
						}],
						itemGap: 24,
						padding: [16, 0, 0, 0],
						// y: 'bottom',
						itemHeight: 8, //高
						itemWidth: 8, //宽
						icon: 'circle' //设置为圆
					},
					grid: {
						top: '15%',
						left: '4%',
						right: '4%',
						bottom: '6%',
						containLabel: true
					},
					xAxis: [{
						show: true,
						type: 'category', //坐标轴类型
						// boundaryGap:false, //解决数据与线不对应问题
						data: ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8', '7.9', '7.10', '7.11'],
						// offset:50,
						//['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8', '7.9', '7.10','7.11', ], //this.xList, //obama_budget_2012.names
						axisLabel: {
							color: '#7F84B5',
							fontWeight: 300,
							interval: 0,
						},
						axisTick: {
							show: false //刻度线
						},
						axisLine: {
							show: false, //不显示坐标轴线
						},
					}, ],
					yAxis: [{
						show: true,
						boundaryGap: false, //解决数据与线不对应问题
						type: 'value',
						// name: 'Budget (million USD)',
						// data: this.yList,
						minInterval: 1,
						axisLabel: {
							interval: 0,
						},
						splitLine: {
							show: true,
							lineStyle: { //背景网格线
								type: 'dashed'
							}
						},
						axisTick: {
							show: false //刻度线
						},
						axisLine: {
							show: false, //不显示坐标轴线
						},
					}],
					dataZoom: [{
							show: false,
							start: 0,
							end: 100,
							handleSize: 8
						},
						{
							type: 'inside',
							start: 0,
							end: 50,
						},
						{
							show: false,
							yAxisIndex: 0,
							filterMode: 'empty',
							width: 12,
							height: '80%',
							showDataShadow: false,
							left: '93%',
							handleSize: 8
						}
					],
					series: [{
							name: '进入数',
							type: 'bar',
							data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120'],
							//['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110','120'], // this.inNum, //obama_budget_2012.budget2011List
							color: "#00B1FF"
						},
						{
							name: '出去数',
							type: 'bar',
							data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120'],
							//['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110','120'], //this.outNum, //obama_budget_2012.budget2012List
							color: "#FF6C00"
						}
					]
				};
			},
		}
	};
</script>

<style lang="less" scoped>
	.header {
		background: linear-gradient(to bottom right, #00C260, #41C781);
		height: 20vh;
		display: flex;
		flex-direction: column;
		padding-top: 100rpx;
		box-sizing: border-box;
		align-items: center;

		.title {
			color: #fff;
			font-size: 30rpx;
			font-family: fantasy;
		}

		.count {
			color: #fff;
			font-size: 60rpx;
			margin-top: 30rpx;
			font-family: fantasy;
		}
	}
</style>
