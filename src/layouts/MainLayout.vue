<template>
  <q-layout view="lHh Lpr lFf">

    <app-header></app-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header'
export default {
  name: 'MainLayout',
  components: {
    'app-header': Header
  },
  data () {
    return {}
  }

}
</script>
