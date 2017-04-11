import axios from 'axios'
import url from './api/url'

const baseApi = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get(api, params = {}) {
    return new Promise((resolve, reject) => {
      baseApi.get(api, {params: params}).then((response) => {
        resolve(response.data)
      })
    })
  },
  post(api, params = {}) {
    return new Promise((resolve, reject) => {
      baseApi.post(api, params).then((response) => {
        resolve(response.data)
      })
    })
  },
  delete(api, params = {}) {
    return new Promise((resolve, reject) => {
      baseApi.delete(api, params).then((response) => {
        resolve(response.data)
      })
    })
  }
}
