<template>
  <div id="profile">
      <nav-bar class="nav-bar">
        <div slot="center">我的信息</div>
      </nav-bar>
      <scroll class="scroll-height">
        <login/>
        <money/>
        <div class="line"></div>
        <profile-list/>
      </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import Login from './child/Login'
import Money from './child/Money'
import ProfileList from './child/ProfileList'
export default {
  name: 'Profile',
  components: {
    NavBar,
    Login,
    Money,
    ProfileList,
    Scroll
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.scroll-height {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
}
.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
</style>