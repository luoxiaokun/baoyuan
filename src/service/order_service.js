import baseService from './base'
import api from './api/order'

export default {
  index(orderType) {
    let url = `${api.index}${orderType}`
    return baseService.get(url)
  }
}
