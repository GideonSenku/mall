<template>
  <div class="recommend">
    <div v-for="recommend in recommends" :key="recommend.title" class="recommend-item">
        <a :href="recommend.link"><img :src="recommend.image" alt="recommend.title"></a>
        <div>{{ recommend.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
    .recommend{
        width: 100%;
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 10px 0px 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>