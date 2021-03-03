import { firebaseAuth } from './firebase'
import { LocalStorage } from 'quasar'
export default ({ app, router, Vue }) => {
  firebaseAuth.onAuthStateChanged((user) => {
    if (!user) {
      LocalStorage.set('currentUserEmail', '')
      router.replace('/')
    } else {
      LocalStorage.set('currentUserEmail', user.email)
    }
  })
}
