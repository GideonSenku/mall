import { debounce } from './utils'
export const mixin = {
  data() {
    return {
        imageLoadListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.imageLoadListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.imageLoadListener)
    console.log('我是mixin')
  }
}