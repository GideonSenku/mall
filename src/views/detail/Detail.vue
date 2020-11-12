<template>
  <div>
      <detail-nav-bar/>
      <detail-swiper :images="topImages"/>
      <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import { getDetails, Goods } from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    }
  },
  created() {
    this.iid = this.$route.query.iid
    getDetails(this.iid).then((res) => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    })

  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  }
}
</script>

<style>

</style scoped>