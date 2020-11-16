<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="scroll-height" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-images-info :images-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="params" :param-info="paramsInfo"/>
      <detail-comment-info ref="comments" :comment-info="commentInfo"/>
      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar/>
    <back-top @click.native="backClick" v-show="isShowScroll" class="back-top"/>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'
import DetailImagesInfo from './childrenComps/DetailImagesInfo'
import DetailParamInfo from './childrenComps/DetailParamInfo'
import DetailCommentInfo from './childrenComps/DetailCommentInfo'
import DetailBottomBar from './childrenComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'

import { getDetails, getRecommend, Goods, Shop, GoodsParams } from 'network/detail'

import { debounce } from 'common/utils'
import { imageLoadMixin, backTopMixin } from 'common/mixin'

export default {
  name: 'Detail',
  mixins: [imageLoadMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      getOffsetTop: null,
      currentIndex: 0
    }
  },
  created() {
    // 1. 获取iid
    this.iid = this.$route.query.iid
    // 2. 根据iid请求详情数据
    getDetails(this.iid).then((res) => {
      const data = res.result
      // 1. 获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages
      // 2. 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 3. 创建店铺信息对象
      this.shop = new Shop(data.shopInfo)
      // 4. 保存商品的详情数据
      this.detailInfo = data.detailInfo
      // 5. 保存商品的参数数据
      this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule || {})
      // 6. 获取评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }
    })
    // 3. 获取推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    // 4. getOffsetTop获取和防抖操作
    this.getOffsetTop = debounce(() => {
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comments.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
        this.themeTopY.push(Number.MAX_VALUE)
    }, 100)
  },
  mounted() {

  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.imageLoadListener)
  },
  methods: {
    imgLoad() {
      this.refresh()
      this.getOffsetTop()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 0)
    },
    scroll(position) {
      const posY = -position.y
      // 滚动事件，将位置信息与各个组件的offsetTop进行比较，切换
      for (let index = 0; index < this.themeTopY.length - 1; index++) {
        const themeTopYPos = this.themeTopY[index]
        if (this.currentIndex !== index && posY >= this.themeTopY[index] && posY < this.themeTopY[index + 1]) {
          // 将状态保存
          this.currentIndex = index
          // 修改nav组件的currentIndex
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.listenShowBackTop(position)
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll
  }
}
</script>

<style>
  #detail {
    height: 100vh;
    position: relative;
  }
  /* .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  } */
  .scroll-height {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #fff;
    z-index: 9;
  }
  .back-top {
    z-index: 9;
  }
</style scoped>