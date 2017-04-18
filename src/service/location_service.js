import baseService from './base'
import api from './api/location'

export default {
  provinces() {
    let url = `${api.provinces}`
    return baseService.get(url)
  },
  cities(provinceId) {
    let url = `${api.cities}${provinceId}`
    return baseService.get(url)
  },
  districts(cityId) {
    let url = `${api.districts}${cityId}`
    return baseService.get(url)
  }
}
