export const forRoutes = (route) => {
  route.forEach((item) => {
    if (item.children && item.children.length <= 0) {
      delete item.children
    }
    if (item.children && item.children.length > 0) {
      forRoutes(item.children)
    }
  })
  return route
}
