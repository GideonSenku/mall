import { debounce } from './utils'
export const mixin = {
  data() {
    return {
        imageLoadListener: null,
        refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100)
    this.imageLoadListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImageLoad', this.imageLoadListener)
  }
}