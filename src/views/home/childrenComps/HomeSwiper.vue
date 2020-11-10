<template>
  <div>
    <swiper>
      <swiper-item v-for="banner in banners" :key="banner.title">
        <a :href="banner.link"><img :src="banner.image" :alt="banner.title" @load="imageLoad"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('imageSwiperLoad')
        this.isLoad = true
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>