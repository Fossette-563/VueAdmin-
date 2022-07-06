<template>
  <div class="wrapper">
    <div>
      <!-- <el-tag
        v-for="(item, index) in tags"
        :key="index"
        @click="changeRoute(item)"
        class="mx-1"
        :type="item.type"
        effect="plain"
        closable
      >
        {{ item.title }}
      </el-tag> -->
      <ul class="tagsview-container">
        <li
          v-for="(item, index) in tags"
          :key="index"
          @click="changeRoute(item)"
        >
          {{ item.title }}
          <span class="close" @click.stop="closeTags(item.path, index)">X</span>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const route = useRoute()
watch(
  () => route.path,
  (nValue) => {
    const person = {
      path: route.path,
      title: route.meta.title
    }
    store.commit('tags/setTags', person)
  },
  { immediate: true }
)
const tags = computed(() => {
  return store.getters.tagsView
})
const changeRoute = (item) => {
  router.push(item.path)
}
const closeTags = (path, index) => {
  store.commit('tags/deleteTags', {
    index,
    path
  })
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.tagsview-container {
  height: 40px;
  list-style: none;
  width: 100%;
  border-bottom: 1px solid #e4e7ed;
  li {
    width: 90px;
    float: left;
    padding: 0 20px;
    line-height: 40px;
    cursor: pointer;
    .close {
      font-size: 10px;
      display: none;
    }
    &:hover .close {
      display: inline-block;
    }
  }
  .active {
    color: aquamarine;
    border-bottom: none;
  }
}
</style>
