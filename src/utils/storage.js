/**
 * 存储数据
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 * @param {*} key
 * @returns
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除本地
 * @param {string} key
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
/**
 * 清空本地
 */

export const removeAllItem = (key) => {
  window.localStorage.clear()
}
