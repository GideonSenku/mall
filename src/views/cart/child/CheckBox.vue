<template>
  <div class="check-box" :class="{ check: isCheck }">
      <img src="~assets/img/cart/tick.svg" alt="" srcset="">
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-box {
    border-radius: 50%;
    border: 2px solid #aaa;
}

.check {
    background-color: red;
    border-color: red;
}
</style>