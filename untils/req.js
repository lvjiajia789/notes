
import config from './config.js'

let baseUrl

// #ifdef H5
baseUrl = config.h5Host
// #endif

// #ifdef MP-WEIXIN
baseUrl = config.mpHost
// #endif


export default function(url,data={},method="GET"){
	return new Promise(resolve=>{
		uni.request({
			url: baseUrl + url,
			data,
			method,
			success:(res)=>{
				resolve(res.data)
			}
		})
	})
}