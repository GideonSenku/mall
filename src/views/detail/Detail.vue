<template>
  <div>
      <detail-nav-bar/>
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar'

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

  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
}
</script>

<style>

</style scoped>