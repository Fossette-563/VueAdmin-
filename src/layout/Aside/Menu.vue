<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    router
    unique-opened
  >
    <el-menu-item index="/index">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <MenuItem v-for="item in nav" :key="item.id" :item="item"></MenuItem>
  </el-menu>
</template>

<script setup>
import { HomeFilled } from '@element-plus/icons-vue'
import MenuItem from './MenuItem.vue'
import { computed } from '@vue/runtime-core'
import { forRoutes } from '@/utils/removeChidlren'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/router'
const router = useRouter()
const nav = computed(() => {
  // 将路由一级路由数据处理成菜单数据
  const routes = filterRouters(router.getRoutes())
  // 去除空的children
  return forRoutes(generateMenus(routes))
})
</script>

<style lang="scss" scoped></style>
