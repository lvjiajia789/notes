import req from '../../untils/req.js'
import {GET_INDEX_DATA_LIST} from '../mutation-type.js'

	const state = {
		indexData : {}
	}
	const actions = {
		async getIndexData({commit}){
			let res = await req('/getIndexData')
			commit('GET_INDEX_DATA',res)
		}
	}
	const mutations = {
		GET_INDEX_DATA(state,indexData){
			state.indexData = indexData
		}
	}


export default {
	namespaced:true,
		state,
		actions,
		mutations
	}