
import { LocalStorage } from 'quasar'
export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = LocalStorage.getItem('currentUserEmail')

    if (requiresAuth && !currentUser) {
      LocalStorage.set('currentUserEmail', '')
      next('/')
    } else if (!requiresAuth && currentUser) {
      next('/dashboard')
    } else {
      console.log('Am supposed to go to next')
      next()
    }
  })
}
