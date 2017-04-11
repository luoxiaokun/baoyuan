import baseService from './base'
import api from './api/user'

export default {
  profile() {
    let url = `${api.profile}`
    return baseService.get(url)
  },
  defaultAddress() {
    let url = `${api.defaultAddress}`
    return baseService.get(url)
  }
}
