import baseService from './base'
import api from './api/collect'

export default {
  index() {
    return baseService.get(api.index)
  }
}
