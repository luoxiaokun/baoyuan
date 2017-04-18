import baseService from './base'
import api from './api/group'

export default {
  group(groupId) {
    let url = `${api.group}${groupId}`
    return baseService.get(url)
  }
}
