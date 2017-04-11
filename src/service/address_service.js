import baseService from './base'
import api from './api/address'

export default {
  create(address) {
    let params = {
      address: {
        province_id: address.province,
        city_id: address.city,
        district_id: address.district,
        name: address.name,
        phone: address.phone,
        street: address.detail
      }
    }
    return baseService.post(api.create, params)
  },
  update(address) {
    let params = {
      address: {
        province_id: address.province,
        city_id: address.city,
        district_id: address.district,
        name: address.name,
        phone: address.phone,
        street: address.detail
      }
    }
    let url = `${api.update}${address.id}/update`
    return baseService.post(url, params)
  },
  delete(address) {
    let url = `${api.delete}${address.id}/delete`
    return baseService.get(url)
  },
  index() {
    return baseService.get(api.index)
  },
  default(address) {
    let url = `${api.default}${address.id}/default`
    return baseService.get(url)
  }
}
