import Api from './Api'

export default {
  index() {
    return Api.get('posts')
  },
  show(id) {
    return Api.get(`posts/${id}`)
  },
  store(data) {
    return Api.post('posts', data)
  },
  update(id, data) {
    return Api.put(`posts/${id}`, data)
  },
  destroy(id) {
    return Api.delete(`posts/${id}`)
  }
}