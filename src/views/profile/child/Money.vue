<template>
  <div class="money">
      <div class="money-item">
          <p class="num">0.00<span>元</span></p>
          <p class="desc">我的余额</p>
      </div>
      <div class="money-item">
          <p class="num">0<span>个</span></p>
          <p class="desc">我的优惠</p>
      </div>
      <div class="money-item">
          <p class="num">0<span>分</span></p>
          <p class="desc">我的积分</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Money'
}
</script>

<style scoped>
.money {
  display: flex;
  width: 100%;
}
.money-item {
  display: flex;
  align-items: center;/* 垂直居中 */
  flex: 1;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  height: 85px;
}
.money-item:nth-of-type(1),
.money-item:nth-of-type(2) {
  border-right: 1px solid #eeeeee;
}
.money-item p:first-child {
  font-size: 24px;
  margin-bottom: 3px;
  color: #ff5f3e;
}
.money-item p:first-child span {
  font-size: 14px;
  font-weight: normal;
  margin-left: 3px;
  color: #666666;
}
.money-item p:last-child {
  font-size: 14px;
  color: #666666;
}

</style>