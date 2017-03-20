import baseService from './base'
import api from './api/products'

export default {
  getProductsByType(typeId) {
    let url = `${api.productsBySubType}${typeId}`
    return baseService.get(url)
  },
  searchProducts(searchStr) {
    return baseService.post(api.search, {search: searchStr})
  },
  getProduct(productId) {
    let url = `${api.product}${productId}`
    return baseService.get(url)
  },
  favProduct(productId) {
    let url = `${api.product}${productId}/fav`
    return baseService.get(url)
  }
}
