<template>
  <div class="tab-control">
      <!-- 动态绑定class -->
      <div v-for="(title, index) in titles" :key="index" class="tab-control-item" 
      :class="{active: currentIndex === index}"
      @click="itemClick(index)">
          <span>{{ title }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      // 使用一个变量保存状态
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
  .tab-control {
      display: flex;
      text-align: center;
      font-size: 15px;
      height: 40px;
      line-height: 40px;
  }
  .tab-control-item{
      flex: 1;
  }
  .tab-control-item span {
      padding: 3px;
  }
  .active {
      color: var(--color-high-text);
  }
  .active span {
      border-bottom: 3px solid var(--color-tint);
  }
</style>