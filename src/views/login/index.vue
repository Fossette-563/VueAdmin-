<template>
  <div class="login-page">
    <div class="login-box">
      <h3>欢迎来到VueAdmin管理系统</h3>
      <el-form :model="form" ref="loginRef" :rules="loginRules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label="验证码" prop="captchaImg">
          <el-input v-model="form.captchaImg" style="width: 200px" />
          <img :src="src" class="capimg" @click="getCode()" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="hh">获取密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import useApi from '../../api/user'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const form = reactive({
  username: 'test',
  password: '1234567',
  captchaImg: '',
  token: ''
})

const loginRef = ref(null)
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captchaImg: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})
// 获取图形验证码
const src = ref('')
const getCode = async () => {
  const data = await useApi.captcha()
  console.log(data)
  form.token = data.token
  src.value = data.captchaImg
  console.log(src)
  store.commit('user/setCode', data)
}
getCode()
// 登录请求
const onSubmit = async () => {
  if (!loginRef.value) return
  await loginRef.value.validate()
  await useApi.login(form)
  router.push('/')
  getuserInfo()
  side()
}
// 获取验证码
const hh = () => {
  ElMessage({
    message: '请扫描左边的二维码，回复【VueAdmin】获取登录密码'
  })
}
// 获取用户信息
const getuserInfo = async () => {
  const res = await useApi.userInfo()
  console.log(res, 'user')
  store.commit('user/setUseInfo', res)
}
// 获取菜单栏
const side = async () => {
  const sideres = await useApi.side()
  console.log(sideres, 'side')
  store.commit('user/setside', sideres)
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;

  .login-box {
    height: 200px;
    width: 500px;
    background-color: ghostwhite;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    padding: 40px;
    h3 {
      color: gray;
      margin-bottom: 20px;
    }
    .capimg {
      width: 150px;
      height: 40px;
      margin-left: 20px;
    }
  }
}
</style>
