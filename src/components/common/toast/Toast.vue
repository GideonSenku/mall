<template>
  <div class="toast" v-if="isShow">
      <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = 'hello,world', time = 1500) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, time)
    }
  }
}
</script>

<style scoped>
.toast {
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: #fff;
    background: rgba(0, 0, 0, .75);
}
</style>