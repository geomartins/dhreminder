<template>
  <q-page class="flex flex-center login" >

    <div class="login-main">
      <q-list class="q-mb-md">
          <q-item >
        <q-item-section>
          <q-item-label style="font-size: 1.2rem">Sign In to account</q-item-label>
          <q-item-label caption style="font-size: 0.80rem">
            Enter your email address and password to login

          </q-item-label>
        </q-item-section>
      </q-item>
      </q-list>
      <div class="q-ma-sm">
        <q-input outlined  v-model="email" label="Email Address" stack-label :dense="dense" />
      </div>
      <div class="q-ma-sm">
        <q-input type="password" outlined v-model="password" label="Password" stack-label :dense="dense" />
      </div>
      <div class="q-mt-lg q-ml-sm q-mr-sm">

        <div v-if="$store.state.login.loadingStatus == true">
          <q-spinner-tail
            color="primary"
            size="2em"
          />

        </div>
        <q-btn v-else color="primary" class="full-width" label="Login Now" :disabled="!$store.state.login.validation" @click.prevent="login()"/>
      </div>

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
  background: url('/bg.jpg');
  background-size: cover;
  background-position: center center;

}

.login-main {
    width: 450px;
    padding: 20px 20px;
    /* -webkit-box-shadow: 0 0 37px rgb(8 21 66 / 5%); */
    /* box-shadow: 0 0 37px rgb(8 21 66 / 5%); */
    margin: 0 auto;
    background-color: #fff;
    border-top: 1px solid #145ea8;
    border-radius: 0px 0px 10px;
}

.logo {
    display: block;
    margin-bottom: 30px;
    text-align: center;
}
</style>
