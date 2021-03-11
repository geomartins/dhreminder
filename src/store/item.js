import { domainCollections, timestamp } from '../boot/firebase'
import ping from '../functions/ping'
import { Dialog } from 'quasar'
import { timestampConverter } from '../functions/timestampconverter'

const state = {
  formData: {
    name: '',
    id: ''
  },
  types: ['hosting', 'domain'],
  innerLoadingStatus: false,
  filter: '',
  datas: [],
  columns: [
    {
      name: 'name',
      required: true,
      label: 'DOMAIN',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'provider',
      required: true,
      label: 'REGISTRAR',
      align: 'left',
      field: row => row.provider ?? '---------------',
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'nameserver',
      required: true,
      label: 'NAMESERVER',
      align: 'left',
      field: row => row.nameserver ?? ' ',
      format: val => `${val}`,
      sortable: true
    },
    { name: 'timestamp', align: 'left', label: 'EXPIRY DATE', field: row => timestampConverter(row.timestamp), sortable: true }

  ],
  rows: [

  ]
}
const getters = {
  fetchID (state) {
    return state.formData.id
  },
  fetchName (state) {
    return state.formData.name
  },
  fetchFilter (state) {
    return state.filter
  }

}
const mutations = {
  UPDATE_ID (state, value) {
    state.formData.id = value
  },
  UPDATE_NAME (state, value) {
    state.formData.name = value
  },
  UPDATE_FILTER (state, value) {
    state.filter = value
  },

  UPDATE_INNER_LOADING_STATUS (state, value) {
    state.innerLoadingStatus = value
  },
  CLEAR_FORM_DATA (state) {
    state.formData = {
      name: '',
      id: ''
    }
  }
}
const actions = {
  async create ({ commit, state }, vueInstance) {
    const data = { ...state.formData, timestamp: timestamp }
    delete data.id

    commit('UPDATE_INNER_LOADING_STATUS', true)
    domainCollections.add(data).then(() => {
      commit('UPDATE_INNER_LOADING_STATUS', false); commit('CLEAR_FORM_DATA')
      vueInstance.close()
      ping({ type: 'success', message: 'Domain added successfully' })
    }).catch(err => {
      commit('UPDATE_INNER_LOADING_STATUS', false)
      ping({ type: 'warning', message: err.message })
    })
  },

  async fetch ({ state }) {
    if (state.datas.length > 0) {
      return
    }
    domainCollections.orderBy('timestamp', 'desc').onSnapshot(function (querySnapshot) {
      state.datas = []
      state.rows = []
      querySnapshot.forEach(function (doc) {
        const modifiedData = { id: doc.id, ...doc.data() }
        const modifiedRow = { id: doc.id, name: doc.data().name, provider: doc.data().provider, nameserver: doc.data().nameserver, timestamp: doc.data().expiry_date }
        state.datas.push(modifiedData)
        state.rows.push(modifiedRow)
      })
    })
  },

  async delete_confirmation ({ commit, dispatch }, docId) {
    // const docId = payload.docId
    // const vueInstance = payload.vueInstance
    Dialog.create({
      title: 'Confirm',
      message: 'Please confirm that you want to delete selected item?',
      cancel: true,
      persistent: true
    }).onOk(() => {
      dispatch('delete', docId)
    }).onOk(() => {}).onCancel(() => {}).onDismiss(() => {})
  },

  async delete ({ commit, state }, docId) {
    domainCollections.doc(docId).delete().then(function () {
      // ping({ type: 'success', message: 'Item deleted successfully' })
    }).catch(function (err) {
      ping({ type: 'warning', message: err.message })
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
