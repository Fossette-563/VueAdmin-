import request from '../utils/request'

/**
 * 图形验证码
 * @returns
 */
const captcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}
/**
 * 登录接口
 * @param {*} data
 * @returns
 */
const login = (data) => {
  console.log(data)
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.captchaImg}&token=${data.token}`,
    method: 'POST',
    data
  })
}

/**
 * 用户接口
 */
const userInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}
/**
 * 菜单栏接口
 */
const side = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}
export default {
  login,
  captcha,
  userInfo,
  side
}
