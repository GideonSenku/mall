<template>
  <div>
      <detail-nav-bar/>
      <detail-swiper :images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'

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
    DetailShopInfo
  }
}
</script>

<style>

</style scoped>