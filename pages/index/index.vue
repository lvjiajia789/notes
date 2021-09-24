<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/logo.png"></image>
			<view class="search" >
				<i class="iconfont icon-sousuo"></i>
				<input type="text" value="" class="searchInput" placeholder-class="placeholder" placeholder="搜索商品"/>
			</view>
			<button class="username">画面太美</button>
		</view>
		<scroll-view class="navScroll" scroll-x="true"  enable-flex="true">
			<view class="navItem" @click="changeNavIndex(-1)" :class="navIndex===-1?'active':''">
			推荐
			</view>
			<view class="navItem" v-for="(kingKong,index) in navList" :key="kingKong.L1Id" :class="navIndex===index?'active':''" @click="changeNavIndex(index)">
				{{kingKong.text}}
			</view>
		</scroll-view>
		
		<scroll-view>
			<Recommend :indexData='indexData'></Recommend>
		</scroll-view>
	</view>
	
	
</template>

<script>
	import req from "../../untils/req.js"
	import {mapState, mapActions} from 'vuex'
	import Recommend from '../../components/recommend/recommend.vue'
	export default {
		data() {
			return {
				navList:[],
				navIndex:-1
			}
		},
		onLoad() {
			this.getIndexData()
			
		},
		watch:{
			indexData(){
				this.navList = this.indexData.kingKongModule ? this.indexData.kingKongModule.kingKongList : []
			}
		},
		computed:{
			...mapState('home',['indexData'])
		},
		methods: {
			// async getIndexData(){
			// 	const res = await req('/getIndexData')
			// 	console.log(res)
			// 	this.indexDataList = res.kingKongModule.kingKongList
			// },
			...mapActions('home',['getIndexData']),
			changeNavIndex(index){
				this.navIndex = index
			}
		},
		components:{
			Recommend
		}
	}
</script>

<style lang="stylus">
	.indexContainer
			.header
				padding-top 20upx
				display flex
				align-items  center
				.logo
					width 118upx
					height 40upx
					margin 0 20upx
					flex-shrink  0
				.search
					position relative
					background  #ccc
					border-radius  10upx
					height 60upx
					flex-grow 1
					padding-left 80upx
					.iconfont
						position absolute
						left 20upx
						top 50%
						transform translateY(-50%)
					.searchInput
						height 100%
					.placeholder
						text-align center
						font-size 28upx
						text-indent -80upx
				.username
					width 140upx
					height 60upx
					line-height 60upx
					font-size 18upx
					color red
					flex-shrink  0
					margin 0 20upx
			.navScroll				// display flex
				white-space nowrap
				.navItem
						display inline-block
						width 140upx
						height 80upx
						font-size 28upx
						text-align center
						line-height 80upx
						&.active
							border-bottom 4upx solid red
</style>
