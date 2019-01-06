import axios from 'axios'
import Store from '../store'

export default class baseService {
  static api (url, method, object) {
    const baseUrl = window.localMode ? 'http://localhost:8080' : ''
    url = `${baseUrl}/${url}`

    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: method,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: object ? JSON.stringify(object) : null
      }).then(response => {
        resolve(response.data)
      }).catch(e => {
        reject(e.response)
      })
    })
  }

  static apiWithToken (url, method, object) {
    const baseUrl = window.localMode ? 'http://localhost:8080' : ''
    url = `${baseUrl}/${url}`

    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: method,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': Store.state.token
        },
        data: object ? JSON.stringify(object) : null
      }).then(response => {
        resolve(response.data)
      }).catch(e => {
        reject(e.response)
      })
    })
  }

  static get (url, token) {
    return token ? this.apiWithToken(url, 'get') : this.api(url, 'get')
  }

  static post (url, object, token) {
    return token ? this.apiWithToken(url, 'post', object) : this.api(url, 'post', object)
  }

  static put (url, object, token) {
    return token ? this.apiWithToken(url, 'put', object) : this.api(url, 'put', object)
  }

  static delete (url, object, token) {
    return token ? this.apiWithToken(url, 'delete', object) : this.api(url, 'delete', object)
  }
}
