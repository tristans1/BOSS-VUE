import param from '../param/param'

export default {

  get(type) {
    return axios.post(param[type])
      .then(response => {
        return response.data
      })
  },

    maj(type, params) {
      return axios.post(param[type], params)
        .then(response => {
          return response.data
        })
    },

}
