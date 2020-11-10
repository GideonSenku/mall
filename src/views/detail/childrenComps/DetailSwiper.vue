<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(image, index) in images" :key="index">
      <img :src="image">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  props: {
    images: {
      type: Array,
      default() {
        return []
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
    .detail-swiper {
        height: 300px;
    }
</style>