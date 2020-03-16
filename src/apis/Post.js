import Api from './Api'

export default {
  all() {
    return Api.get('posts')
  },
  getOne(id) {
    return Api.get(`posts/${id}`)
  },
  save(data) {
    return Api.post('posts', data)
  },
  update(id, data) {
    return Api.put(`posts/${id}`, data)
  },
  delete(id) {
    return Api.delete(`posts/${id}`)
  }
}