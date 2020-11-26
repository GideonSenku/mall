<template>
  <div class="category-detail">
    <div :key="index" class="category-detail-item" v-for="(item, index) in CategoryList">
      <a :href="item.link"><img :src="item.image" :alt="item.title" /></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subcategory',
  props: {
    CategoryList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.category-detail {
    display: flex;
    flex-wrap: wrap; /* flex布局换行显示 */
    justify-content: space-between;
    width: 100%;
    padding: 10px;
}

.category-detail-item {
    width: 80px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
.category-detail-item img {
    width: 65px;
    margin-bottom: 7px;
}
.category-detail-item p {
    font-size: 14px;
}
</style>