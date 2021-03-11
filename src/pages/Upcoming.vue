<template>

   <div class="q-pa-xs">
      <app-breadcrumb title="Tracked Domain Details"></app-breadcrumb>

    <q-table
      :data="$store.state.item.rows"
      :columns="$store.state.item.columns"
      row-key="name"
      :filter="$store.state.item.filter"
      flat
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="md" flat color="red" round dense @click="$store.dispatch('item/delete_confirmation',props.row.id)" icon="delete_outline" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <!-- <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row ok now above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr> -->
      </template>

    </q-table>
  </div>
</template>
<script>
import BreadCrumb from '../components/BreadCrumb'
export default {
  name: 'Upcoming',
  components: {
    'app-breadcrumb': BreadCrumb
  },
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('item/fetch')
  }
}
</script>
