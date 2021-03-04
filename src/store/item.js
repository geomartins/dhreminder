import { fs } from '../boot/firebase'
const state = {
  formData: {
    name: '',
    id: ''
  },
  types: ['hosting', 'domain'],
  innerLoadingStatus: false
}
const getters = {
  fetchID (state) {
    return state.formData.id
  },
  fetchName (state) {
    return state.formData.name
  }

}
const mutations = {
  UPDATE_ID (state, value) {
    state.formData.id = value
  },
  UPDATE_NAME (state, value) {
    state.formData.name = value
  },

  UPDATE_INNER_LOADING_STATUS (state, value) {
    state.innerLoadingStatus = value
  },
  CLEAR_FORM_DATA (state) {
    state.formData = {
      name: '',
      type: '',
      expiry_date: '',
      id: ''
    }
  }
}
const actions = {
  async create (vueInstance) {
    fs.collection('dhreminders').add()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
