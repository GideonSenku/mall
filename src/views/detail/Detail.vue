<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="scroll-height">
      <detail-swiper :images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetails, Goods, Shop } from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    this.iid = this.$route.query.iid
    getDetails(this.iid).then((res) => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
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