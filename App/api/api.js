import request from '@/utils/index.js'

export const repair = data => request('/user/add','POST', data)
export const history = () => request('/user/history','GET')   			//待派单
export const awaitrepair = () => request('/user/awaitrepair','GET')		//待维修
export const repaired = () => request('/user/repaired','GET')			//已维修
export const recall = () => request('/user/recall','GET')			    //已撤回
export const reject = () => request('/user/reject','GET')			    //已驳回
export const callback = data => request('/user/callback','POST',data)	//撤单	
export const searchOrder = data => request('/user/recallHistory','GET', data)
export const authVerify = () => request('/admin/verify','POST')
export const adminHistory = () => request('/user/adminhistory','GET')
export const statement = data => request('/repairer/statement','POST', data)//维修师傅结单
export const dispatch = data => request('/admin/dispatch','POST', data)//管理员派单
export const repairerList = data => request('/admin/selectrepairer','GET')//获取维修师傅信息
export const repairerAwaitrepair = data => request('/repairer/repairerawaitrepair','GET')//维修师傅待维修
export const repairerRepaired = data => request('/repairer/repairerrepairered','GET')// 维修师傅已维修
export const rejectitem = data => request('/admin/rejectitem','GET', data)// 驳回维修
export const building = () => request('/admin/findbuilding','GET')// 楼宇信息

