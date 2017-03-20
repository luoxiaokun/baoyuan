import axios from 'axios'
import url from './api/url'
export default {
  get(api, params = {}) {
    let apiUrl = `${url}${api}`
    return axios.get(apiUrl, {params: params}).then((response) => {
      return response.data
    })
  },
  post(api, params = {}) {
    let apiUrl = `${url}${api}`
    return axios.post(apiUrl, params).then((response) => {
      return response.data
    })
  }
}
