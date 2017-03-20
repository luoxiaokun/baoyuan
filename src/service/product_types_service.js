import baseService from './base'
import api from './api/product_types'

export default {
  index() {
    return baseService.get(api.productTypes)
  }
}
