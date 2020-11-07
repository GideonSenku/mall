<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      bscroll: null
    }
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true
    })

    this.bscroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bscroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>