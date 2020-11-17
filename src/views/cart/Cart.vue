<template>
  <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{ length }})</div>
      </nav-bar>
      <cart-list/>
      <cart-bottom/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './child/CartList'
import CartBottom from './child/CartBottom'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>