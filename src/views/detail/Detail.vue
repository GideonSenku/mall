<template>
  <div>
      <detail-nav-bar/>
      <detail-swiper :images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import { getDetails } from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  created() {
    this.iid = this.$route.query.iid
    getDetails(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
}
</script>

<style>

</style scoped>