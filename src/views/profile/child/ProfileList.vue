<template>
  <div class="profile-list">
      <div class="profile-item" v-for="itemUp in itemsUp" :key="itemUp.message">
          <img :src="itemUp.img" alt="" srcset="">
          <span>{{itemUp.message}}</span>
      </div>
      <div class="line"></div>
      <div class="profile-item" v-for="itemDown in itemsDowm" :key="itemDown.message">
          <img :src="itemDown.img" alt="" srcset="">
          <span>{{itemDown.message}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  data() {
    return {
      itemsUp: [
        {
          img: require("../../../assets/img/profile/message.svg"),
          message: '我的消息'
        },
        {
          img: require("../../../assets/img/profile/pointer.svg"),
          message: '积分商城'
        },
        {
          img: require("../../../assets/img/profile/vip.svg"),
          message: '会员卡'
        }
      ],
      itemsDowm: [
        {
          img: require("../../../assets/img/profile/cart.svg"),
          message: '我的购物车'
        },
        {
          img: require("../../../assets/img/profile/shopping.svg"),
          message: '下载购物APP'
        }
      ]
    }
  }
}
</script>

<style scoped>
.profile-list {
    width: 100%;
}
.profile-item {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    text-align: center;
}
.profile-item img {
    width: 24px;
    height: 24px;
    margin-left: 10px;
}
.profile-item span {
    margin-left: 10px;
}
.profile-list :last-child {
    border: none;
}
.line{
    width: 100%;
    height: 10px;
    background-color: #eee;
}
</style>