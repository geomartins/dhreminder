import { firebaseAuth } from '../boot/firebase'
import { LocalStorage } from 'quasar'
import ping from '../functions/ping'

const state = {
  formData: {
    email: '',
    password: ''
  },
  loadingStatus: false,
  validation: false
}

const getters = {
  fetchEmail: (state) => {
    return state.formData.email
  },
  fetchPassword: (state) => {
    return state.formData.password
  },
  fetchLoadingStatus: (state) => {
    return state.loadingStatus
  }
}

const mutations = {
  UPDATE_EMAIL (state, value) {
    state.formData.email = value
  },
  UPDATE_PASSWORD (state, value) {
    state.formData.password = value
  },
  UPDATE_LOADING_STATUS (state, value) {
    state.loadingStatus = value
  },
  UPDATE_VALIDATION (state, value) {
    state.validation = value
  },
  CLEAR_FORM_DATA (state) {
    state.formData.password = ''
    state.formData.email = ''
  }

}

const actions = {

  async login ({ commit, state }, vueInstance) {
    commit('UPDATE_LOADING_STATUS', true)
    firebaseAuth.signInWithEmailAndPassword(state.formData.email, state.formData.password)
      .then((xx) => {
        LocalStorage.set('currentUserEmail', xx.user.email)
        vueInstance.$router.replace('/dashboard')
        commit('CLEAR_FORM_DATA')
        commit('UPDATE_LOADING_STATUS', false)
        commit('UPDATE_VALIDATION', false)
      })
      .catch((error) => {
        commit('UPDATE_LOADING_STATUS', false)
        var errorCode = error.code
        var errorMessage = error.message
        ping({ type: 'warning', message: errorMessage })
        console.log(errorMessage, errorCode)
      })
  },

  async logout ({ commit, state }, vueInstance) {
    firebaseAuth.signOut().then(() => {
      LocalStorage.set('currentUserEmail', '')
      vueInstance.$router.replace('/')
    })
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
