import store from '@/store/index.js'
export default (path, method, data = {}) => {
	const token = uni.getStorageSync("token");
	// const openid = uni.getStorageSync("openid");
	const Authorization = token ? `${uni.getStorageSync("token")}` : "";

	uni.showLoading({
		title: "加载中",
		mask: true
	});

	return new Promise((resolve, reject) => {
		uni.request({
			header: {
				Authorization
			},
			url: "http://10.50.105.61:3001" + path,
			// url: "http://192.168.1.39:3001" + path,
			// url: "http://localhost:3001" + path,
			// url: "http://192.168.43.181:3001" + path,
			// url: "http://192.168.137.1:3001" + path,
			method: method || "GET",
			data,
			success(res) {
				console.log('经过哟了');
				if (res.data.code == 200) {
					resolve(res.data.data);
				}
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				console.error(err);
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};
