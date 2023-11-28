<script>
	import store from '@/store/index.js'
	import {authVerify} from '@/api/api.js'
	export default {
		async onLaunch() {
			const token = uni.getStorageSync('token')
			if(token){
				const isLogin = await authVerify() 
				if(isLogin){
					store.commit('setToken',token)
				}
			}
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "//at.alicdn.com/t/c/font_3916375_hy9jwhkt50n.css";
	@import "./common/uni.css";
	@import "@/uni_modules/uview-ui/index.scss";
</style>
