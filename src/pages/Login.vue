
<template>
  <q-page class="flex flex-center login" >

    <div class="login-main">
      <q-card class="q-mt-xs q-ml-sm q-mr-sm shadow-9" style="width: 500px" >
          <q-separator />

          <q-card-section>

            <q-item  class=" q-mb-sm q-mb-lg" >
                <q-item-section avatar top>
                    <q-avatar icon="group" color="teal" text-color="white"  />
                </q-item-section>

                <q-item-section>
                    <q-item-label lines="1"> Sign In to account</q-item-label>
                    <q-item-label caption> Enter your email address and password to login</q-item-label>
                </q-item-section>

            </q-item>

            <div class="q-mr-lg q-ml-lg q-mt-md q-mb-xs">
                <q-input type="email" v-model="email" label="Email Address" outlined />
            </div>

            <div class="q-mr-lg q-ml-lg q-mt-md q-mb-xs">
                <q-input type="password" v-model="password" label="Password" outlined />
            </div>
          </q-card-section>

          <q-separator />
          <q-card-actions class="q-pt-lg q-pb-lg q-ml-md q-pl-lg q-pr-lg q-mr-md">
               <div v-if="$store.state.login.loadingStatus == true">
                    <q-spinner-tail
                    color="primary"
                    size="2em"
                    />
                </div>
            <q-btn v-else label="Submit" color="teal-8" class="q-pt-xs q-pb-xs q-pl-lg q-pr-lg full-width" :disabled="!$store.state.login.validation" @click.prevent="login()" style="margin: auto" />
          </q-card-actions>

        </q-card>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      dense: false,
      notEmpty: false
    }
  },
  watch: {
    email: function (val) {
      console.log(this.notEmpty)
      if (this.email.length > 4 && this.password.length > 4) {
        this.$store.commit('login/UPDATE_VALIDATION', true)
      } else {
        this.$store.commit('login/UPDATE_VALIDATION', false)
      }
    },

    password: function (val) {
      if (this.email.length > 4 && this.password.length > 4) {
        this.$store.commit('login/UPDATE_VALIDATION', true)
      } else {
        this.$store.commit('login/UPDATE_VALIDATION', false)
      }
    }
  },
  computed: {
    email: {
      get () { return this.$store.getters['login/fetchEmail'] },
      set (value) { this.$store.commit('login/UPDATE_EMAIL', value) }
    },
    password: {
      get () { return this.$store.getters['login/fetchPassword'] },
      set (value) { this.$store.commit('login/UPDATE_PASSWORD', value) }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login/login', this)
    }
  }
}
</script>

<style>
.login{
  background: url('~assets/login_bg.jpeg');
  background-size: cover;
  background-position: center center;

}

.login-main {
}

.logo {
    display: block;
    margin-bottom: 30px;
    text-align: center;
}
</style>
