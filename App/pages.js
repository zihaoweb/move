module.exports = () => ({
		"easycom": {
			"^u-(.*)": "@/uni_modules/uview-ui/components/u-$1/u-$1.vue"
		},
		"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages

			{
				"path": "pages/index/index",
				"style": {
					"navigationBarTitleText": "uni-app"
				}
			}, {
				"path": "pages/Repair/Repair",
				"style": {
					"navigationBarTitleText": "开始报修",
					"enablePullDownRefresh": false
				}
			},
			{
				"path": "pages-subpackages/OrderDesc/OrderDesc",
				"style": {
					"navigationBarTitleText": "报修详情",
					"enablePullDownRefresh": false,
					"navigationBarBackgroundColor": "#00C260",
					"navigationBarTextStyle": "white"
				}

			}, {
				"path": "pages/Mine/Mine",
				"style": {
					"navigationBarTitleText": "我的",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Analysis/Analysis",
				"style": {
					"navigationBarTitleText": "数据统计",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Feedback/Feedback",
				"style": {
					"navigationBarTitleText": "意见反馈",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Introduce/Introduce",
				"style": {
					"navigationBarTitleText": "产品介绍",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Login/Login",
				"style": {
					"navigationBarTitleText": "登录",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/MyRepair/MyRepair",
				"style": {
					"navigationBarTitleText": "我的报修",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Suggestion/Suggestion",
				"style": {
					"navigationBarTitleText": "意见统计",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Tips/Tips",
				"style": {
					"navigationBarTitleText": "消息提醒",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Video/Video",
				"style": {
					"navigationBarTitleText": "视频教程",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Admin/Admin",
				"style": {
					"navigationBarTitleText": "管理员",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/Repairer/Repairer",
				"style": {
					"navigationBarTitleText": "维修列表",
					"enablePullDownRefresh": false
				}
			},
			{
				"path": "pages-subpackages/selectDispatch/selectDispatch",
				"style": {
					"navigationBarTitleText": "派单",
					"enablePullDownRefresh": false
				}

			}, {
				"path": "pages-subpackages/rejectReason/rejectReason",
				"style": {
					"navigationBarTitleText": "驳回",
					"enablePullDownRefresh": false
				}

			}
  
		],
		"globalStyle": {
			"navigationBarTextStyle": "black",
			"navigationBarTitleText": "uni-app",
			"navigationBarBackgroundColor": "#F8F8F8",
			"backgroundColor": "#F8F8F8"
		},
		"uniIdRouter": {},
		"tabBar": {
			"color": "#7a7e83",
			"selectedColor": "#00C260",
			"backgroundColor": "#ffffff",
			"list": [{
					"pagePath": "pages/index/index",
					"text": "首页",
					"iconPath": "static/img/index.png",
					"selectedIconPath": "static/img/indexSelected.png"
				}, {
					"pagePath": "pages/Repair/Repair",
					"text": "开始报修"
				},
				{
					"pagePath": "pages/Mine/Mine",
					"text": "我的",
					"iconPath": "static/img/my.png",
					"selectedIconPath": "static/img/mySelected.png"
				}
			]
		}
	}

)