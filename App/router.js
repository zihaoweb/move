import { RouterMount, createRouter } from 'uni-simple-router';

import { whiteList } from './utils/config.js'

import store from '@/store/index.js'
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (whiteList.includes(to.path || from.path)) {
		next();
	} else {
		if (store.state.token) {
			next()
		} else {
			uni.showToast({
				icon: "none",
				title: "请先登录"
			})
		}
	}

});
// 全局路由后置守卫
// router.afterEach((to, from) => {
// })

export {
	router,
	RouterMount
}
