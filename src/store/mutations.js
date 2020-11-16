import {
    Add_To_Cart,
    Add_Goods_Num
  } from './mutations-type'
export default {
  [Add_Goods_Num](state, payload) {
    payload.count++
  },
  [Add_To_Cart](state, payload) {
    payload.count = 1
    state.cartList.push(payload)
  }
}