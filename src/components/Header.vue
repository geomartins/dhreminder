<template>
    <q-header elevated class="bg-teal">
     <q-bar  class="q-electron-drag">
       <q-avatar>
      <img src="~assets/favicon-96x96.png">
    </q-avatar>

          <div>{{ name }} {{ version }}</div>

          <q-space />

          <q-btn dense flat icon="minimize" @click="minimize" />
          <q-btn dense flat icon="crop_square" @click="maximize" disable  />
          <q-btn dense flat icon="close" @click="closeApp" />

        </q-bar>

        <div class="q-pt-xs q-pb-xs q-pl-sm q-pr-sm q-pl-md row items-center" v-if="$route.path != '/'">
          <div class="cursor-pointer non-selectable" @click="$router.push('/dashboard')">
            Domains
          </div>

          <div class="q-ml-md cursor-pointer non-selectable" @click="$router.push('/upcoming')"  style="position: relative">
            Upcoming
            <q-badge rounded color="red" style="top: -6px; right: -8px" floating>4</q-badge>

          </div>

          <q-space />

            <q-btn dense flat  icon="add"  @click.prevent="$refs.addItem.open()" />

           <q-btn dense flat no-wrap>
            <q-avatar icon="people" rounded size="20px">

            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong> {{ $q.localStorage.getItem('currentUserEmail') }} </strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-status">
                  <q-item-section>
                    <div>
                      <q-icon name="tag_faces" color="blue-9" size="18px" />
                      Set your status
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link" @click.prevent="logout()">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

        <q-input v-model="filter" dark dense  standout  input-class="text-right" class="q-ml-md" >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        </div>

        <app-add-item-card ref="addItem"></app-add-item-card>
    </q-header>
</template>

<script>

import Vue from 'vue'
import AddItemCard from './AddItemCard'
export default Vue.extend({
  name: 'Header',
  components: {
    'app-add-item-card': AddItemCard
  },
  data () {
    return {
      name: process.env.NAME,
      version: 'v' + process.env.VERSION,
      text: '',
      firebaseEmail: '',
      stat: false
    }
  },
  computed: {
    filter: {
      get () { return this.$store.getters['item/fetchfilter'] },
      set (value) { this.$store.commit('item/UPDATE_FILTER', value) }
    }
  },
  methods: {
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    maximize () {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()
        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },

    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    },

    logout () {
      this.$store.dispatch('login/logout', this)
    }
  },
  created () {}
})
</script>
