<template>
  <div class="cart-bottom-bar">
      <div class="cart-bottom-check">
        <check-box  class="checked-all">
          全选
        </check-box>
      </div>
      <div class="cart-bottom-price">
        合计：
        <span>¥ {{ totalPrice }}</span>
        元
      </div>
      <div class="cart-bottom-btn">
        <button>提交订单({{ checkedLength }})</button>
      </div>
    </div>
</template>

<script>
import CheckBox from './CheckBox'
import { mapGetters } from 'vuex'
export default {
  name: 'CartBottom',
  components: {
    CheckBox
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList
      .filter(cartitem => cartitem.checked)
      .reduce((sum, cartitem) => { 
        return sum + cartitem.price * cartitem.count
      }, 0)
    },
    checkedLength() {
      return this.cartList.filter(cartitem => cartitem.checked).length
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
}
.cart-bottom-price {
  margin-left: 50px;
}
.cart-bottom-price span {
  color: red;
}
.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}
.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>