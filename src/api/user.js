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

export default {
  login,
  captcha
}
