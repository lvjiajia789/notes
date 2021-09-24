<template>
	<view class="recommendContainer">
		<swiper class="bannerSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image class="bannerImg" src="../../static/images/index/1.webp" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="bannerImg"  src="../../static/images/index/2.webp" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="bannerImg"  src="../../static/images/index/3.webp" mode=""></image>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList区域 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for="policDesc in indexData.policyDescList" :key='policDesc.desc'>
				<image :src="policDesc.icon" mode=""></image>
				<text>{{policDesc.desc}}</text>
			</view>
			
		</view>
		
		<!-- nav区域 -->
		<view class="nav">
			<view class="navItem" v-for="nav in indexData.kingKongModule.kingKongList" :key='nav.L1Id'>
				<image :src="nav.picUrl" mode=""></image>
				<view>{{nav.text}}</view>
			</view>
			
		</view>
		
		<!-- CategoryList导航指南区域 -->
		<CategoryList :categoryData='categoryData' v-for="(categoryData,index) in indexData.categoryModule" :key='index' />
	</view>
</template>

<script>
	import CategoryList from '../CategoryList/categoryList.vue';
	export default{
		name:"Recommend",
		props:{
			indexData:Object
		},
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		components:{
			CategoryList
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		.bannerSwiper
			.bannerImg
				width 100%
				height 100%
		.policyDescList
			display flex
			justify-content space-around
			.policyDescItem
				image
					width 32upx
					height 32upx
					vertical-align middle
				text
					font-size 24upx
					vertical-align middle
		.nav
			display flex
			flex-wrap wrap
			.navItem
				width 20%
				text-align center
				image
					width 110upx
					height 110upx
				view
					font-size 24upx
</style>
