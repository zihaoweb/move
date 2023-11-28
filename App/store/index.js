import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		token:'',
		isAdmin:false
	},
    mutations: {
		setToken(state, token){
			state.token = token;
			uni.setStorageSync('token', token)
		},
		setAdmin(state, admin){
			if(admin == 1){
				state.isAdmin = true
			}
		},
		delToken(state){
			state.token = ''
			uni.removeStorageSync('token')
		}
	},
    actions: {
		
	}
})
export default store
