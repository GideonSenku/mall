import {
  Add_To_Cart,
  Add_Goods_Num
} from './mutations-type'

export default {
  addCart({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(element => element.iid === payload.iid)
      if (oldProduct) {
        commit(Add_Goods_Num, oldProduct)
        resolve('商品数量+1')
      } else {
        commit(Add_To_Cart, payload)
        resolve('添加新的商品')
      }
    })
  }
}
