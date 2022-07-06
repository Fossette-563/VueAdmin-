<template>
  <div class="layout-main">
    <div class="left">
      <Aside class="aside"></Aside>
    </div>
    <div class="right">
      <Navbar class="navbar"></Navbar>
      <Main class="main"> </Main>
    </div>
  </div>
</template>

<script setup>
import Aside from './Aside'
import Main from './Main'
import Navbar from './Navbar'
</script>

<style lang="scss" scoped>
.layout-main {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    .aside {
      width: 200px;
      height: 100%;
      background-color: #545c64;
    }
  }
  .right {
    width: 100%;
    .navbar {
      width: 100%;
      height: 55px;
      background-color: #17b3a3;
      display: flex;
    }
    .main {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
