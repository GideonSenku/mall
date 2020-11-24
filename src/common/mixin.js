import { debounce } from './utils'
import { minBackPos } from './const'
import BackTop from 'components/content/backTop/BackTop'

export const imageLoadMixin = {
  data() {
    return {
        imageLoadListener: null,
        refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200)
    this.imageLoadListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImageLoad', this.imageLoadListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowScroll: false,
    }
  },
  methods: {
    listenShowBackTop(position) {
      this.isShowScroll = (-position.y) > minBackPos
    },
    // 监听返回按钮
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
