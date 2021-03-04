<template>
    <q-dialog v-model="dialog" :position="position">
      <q-card  class="dialogContainer">
        <q-linear-progress :value="0.6" color="teal" />
            <q-card-section class="dialogBox">

                <!-- <q-item  class="q-mb-xl"  >
                    <q-item-section avatar >
                      <q-avatar icon="group" color="teal" text-color="white"  />
                    </q-item-section>

                    <q-item-section>
                       <q-item-label lines="1"> Add New Item</q-item-label>
                      <q-item-label caption> Kindly enter the domain you want us to track </q-item-label>
                    </q-item-section>
                  </q-item> -->

                <!-- ------------------------- -->

                <div>
                    <q-input outlined v-model="name"  placeholder="Enter Domain Name"  :dense="dense" />
                </div>

                <div class="buttonBar" >
                    <q-btn  size="md" label="Track" outline color="teal"  @click="create()"  />
                    <q-btn  label="Close" size="md" outline color="red"   v-close-popup />
                </div>

                <q-inner-loading :showing="$store.state.item.innerLoadingStatus">
                    <q-spinner-gears size="50px" color="primary" />
                </q-inner-loading>
<!--
                ----------------------------- -->

            </q-card-section>
       </q-card>
    </q-dialog>

</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AddItemCard',
  data () {
    return {

      dialog: false,
      dense: true
    }
  },
  computed: {
    id: {
      get () { return this.$store.getters['item/fetchID'] },
      set (value) { this.$store.commit('item/UPDATE_ID', value) }
    },
    name: {
      get () { return this.$store.getters['item/fetchName'] },
      set (value) { this.$store.commit('item/UPDATE_NAME', value) }
    }

  },
  methods: {
    create () {
      this.$store.dispatch('item/create', this)
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  },
  created () {}

})
</script>

<style >

 .dialogContainer{
     /* width: 30vw; */
 }
  .dialogBox{
      display: flex;
      flex-direction: column;
  }

  .dialogBox div{
      margin-bottom: 0.3rem;
  }

  .dialogContainer div.buttonBar{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
  }

  .dialogContainer div.buttonBar button{
      margin-right: 0.3rem;
  }

  @media (min-width: 0px) and (max-width: 500px){
     .dialogContainer{
          width: 100vw;
     }
  }

   @media (min-width: 501px) and (max-width: 1200px){
     .dialogContainer{
          width: 40vw;
     }
  }

</style>
