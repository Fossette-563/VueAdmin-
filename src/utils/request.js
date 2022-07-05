import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
// import loading from './loading'
const instance = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 1000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 开启loading
    // loading.open()
    const token = store.getters.token
    console.log(token, 'code')
    if (token) {
      config.headers.Authorization = token
    }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 关闭loading
    // loading.close()
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 关闭loading
    // loading.close()
    console.log(response, 'hh')
    if (response.headers.authorization) {
      store.commit('user/settoken', response.headers.authorization)
    }
    const { data, code } = response.data
    if (code === 200) {
      return data
    } else {
      return Promise.reject(ElMessage)
    }
    // 对响应数据做点什么
  },
  function (error) {
    // 关闭loading
    // loading.close()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
