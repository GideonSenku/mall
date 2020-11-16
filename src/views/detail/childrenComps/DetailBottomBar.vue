<template>
  <div class="bottom-bar">
      <div class="left-item">
        <div>
          <i class="icon service"></i>
          <span>客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span>店铺</span>
        </div>
        <div>
          <i class="icon fav"></i>
          <span>收藏</span>
        </div>
      </div>
      <div class="right-item clear-fix">
        <div class="cart left">加入购物车</div>
        <div class="buy right">购买</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',

}
</script>

<style scoped>
.bottom-bar {
  height: 58px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9;
  display: flex;
}

.left-item, .right-item {
  flex: 1;
}

.left-item {
  display: flex;
  justify-content: space-around;
}

.left-item .icon{
  width: 22px;
  height: 22px;
  display: block;
  margin: 10px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.left-item .service{
  background-position: 0 -54px;
}
.left-item .shop{
  background-position: 0 -98px;
}
.right-item {
  font-size: 15px;
  line-height: 58px;
  text-align: center;
}
.cart, .buy {
  width: 50%;
}
.cart {
  background-color: #ffe817;
  color: #333;
}
.buy {
  color: #fff;
  background-color: #f69;
}
</style>