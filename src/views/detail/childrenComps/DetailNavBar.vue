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
    },
    back() {
        this.$router.back()
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
</style>