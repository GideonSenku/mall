<template>
  <div class="cart-list">
    <scroll class="scroll-height" ref="scroll">
      <cart-list-item :key="index" v-for="(item, index) in cartList" :item="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import CartListItem from './CartListItem'
import { mapGetters } from "vuex"
export default {
  name: "CartList",
  components: { 
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList']),
  },
  activated() {
    // 刷新better-scroll
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 99px;
  left: 0;
  overflow: hidden;
  background-color: #fff;
}

</style>