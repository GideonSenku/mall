<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" v-show="isTabFixed" :titles="titles" @tabClick="tabClick" ref="tabControl1"/>
    <scroll class="content" ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll" 
    :pull-up-load="true" 
    @pullingUp="loadMore">
      <home-swiper :banners="banners" @imageSwiperLoad="imageSwiperLoaded" />
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowScroll"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'

import { getMultidata, getHomeGoods } from 'network/home'
import { debounce } from 'common/utils'
import { mixin } from 'common/mixin'

export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowScroll: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  created() {
    this._getMultidata()
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')


  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 100)
    // this.imageLoadListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad', this.imageLoadListener)
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 100)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('itemImageLoad', this.imageLoadListener)
  },
  methods: {
    /* 事件相关代码 */

    tabClick(index) { // 自定义监听事件,不写参数默认传递子组件参数
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 使得两个tabControl的index值保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 监听返回按钮
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    // 监听内容滚动
    contentScroll(position) {
      // 判断BackTop是否显示
      this.isShowScroll = (-position.y) > 600

      // 控制导航栏的显示
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this._getHomeGoods(this.currentType)
    },
    imageSwiperLoaded() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /* 网络请求相关代码 */
    _getMultidata() {
      getMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home {
    /* content使用absolute定位，不再需要padding-top */
    /* padding-top: 44px; */
    height: 100vh; /*  vh表示相对于视框的高度 */
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* 通过Scroll定位布局管理，不再需要fixed，删除这部分代码 
       在使用浏览器原生滚动时，为了让导航不跟随一起滚动
    */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  .tab-control {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>