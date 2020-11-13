<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="scroll-height" ref="scroll">
      <detail-swiper :images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-images-info :images-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramsInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'
import DetailImagesInfo from './childrenComps/DetailImagesInfo.vue'
import DetailParamInfo from './childrenComps/DetailParamInfo.vue'
import DetailCommentInfo from './childrenComps/DetailCommentInfo.vue'
import Scroll from 'components/common/scroll/Scroll'

import { getDetails, Goods, Shop, GoodsParams } from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {}
    }
  },
  created() {
    this.iid = this.$route.query.iid
    // 根据iid请求详情数据
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
      // 获取评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }
    })
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
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
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #fff;
    z-index: 9;
  }
</style scoped>