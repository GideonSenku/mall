<template>
  <div class="detail-nav-bar">
      <nav-bar>
          <div class="back" slot="left" @click="back">
              <img src="~assets/img/common/back.svg">
          </div>
          <div class="title" slot="center">
              <div class="title-item" v-for="(title, index) in titles" 
              :key="index" :class="{active: currentIndex === index}" @click="titleClick(index)">
                  {{ title }}
              </div>
          </div>
          <div slot="right" class="go-cart"  @click="goCart">
            <img src="~assets/img/profile/cart.svg" alt="" srcset="">
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    back() {
        this.$router.back()
    },
    goCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
    .title {
        display: flex;
        font-size: 12px;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: var(--color-high-text);
    }
    .back img {
        margin-top: 11px;
    }
    .go-cart img {
      margin-top: 10px;
      width: 24px;
      height: 24px;
    }
</style>