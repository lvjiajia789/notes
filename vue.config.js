
module.exports={
	devServer:{
		port:8080,
		proxy: {
			"/api":{
				target:'http://localhost:3001',
				changeOrigin:true,
				ws:true,
				pathRewrite:{
					"^/api":""
				}
			}
		}
	}
}