<template>
  <div class="navbar-box">
    <h4>VueAdmin后台管理系统</h4>
    <div class="right">
      <el-avatar :src="avatar" />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ getuserInfo.username
          }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus">个人中心</el-dropdown-item>
            <el-dropdown-item :icon="CirclePlusFilled" @click="outlayout">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const getuserInfo = store.getters.userInfo
const avatar = getuserInfo.avatar

const outlayout = () => {
  store.dispatch('user/setOutlayout')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.navbar-box {
  width: 100%;
  text-align: center;
  line-height: 55px;
  position: relative;
  h4 {
    width: 100%;
    text-align: center;
  }
  .right {
    position: absolute;
    right: 20px;
    .el-avatar {
      margin-top: 5px;
    }
    .el-dropdown {
      margin-top: 15px;
      padding-left: 10px;
    }
  }
}
</style>
