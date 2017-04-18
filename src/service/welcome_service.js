import baseService from './base'
import api from './api/welcome'

export default {
  welcome() {
    return baseService.get(api.welcome)
  },
  banners() {
    return baseService.get(api.banners)
  }
}
