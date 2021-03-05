<template>

   <div class="q-pa-xs">

     <app-domain-card></app-domain-card>
     <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn  fab icon="add" color="primary" @click="$refs.itemAdd.open()"/>
      </q-page-sticky>

      <app-add-item-card ref="itemAdd"></app-add-item-card>

  </div>
</template>
<script>
import Vue from 'vue'
import DomainCard from '../components/DomainCard'
import AddItemCard from '../components/AddItemCard'
export default Vue.extend({
  name: 'Dashboard',
  components: {
    'app-domain-card': DomainCard,
    'app-add-item-card': AddItemCard
  },
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('item/fetch')
  }
})
</script>
