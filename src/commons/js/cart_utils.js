export const checkProductInCart = (product, selectedProducts) => {
  var isIn = selectedProducts.find((item) => {
    if (item.id === product.id) {
      return true
    }
  })
  if (isIn) {
    return true
  }
  return false
}
