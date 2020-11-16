import {
  Add_To_Cart,
  Add_Goods_Num
} from './mutations-type'

export default {
  addCart({
    state,
    commit
  }, payload) {
    let oldProduct = state.cartList.find(element => element.iid === payload.iid)
    if (oldProduct) {
      commit(Add_Goods_Num, oldProduct)
    } else {
      commit(Add_To_Cart, payload)
    }
  }
}
