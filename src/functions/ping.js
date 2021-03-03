
import { Notify } from 'quasar'
export default function (obj) {
  Notify.create({
    position: obj.position ? obj.position : 'bottom-right',
    message: obj.message,
    timeout: 10000,
    textColor: 'white',
    color: obj.type === 'warning' ? 'red' : 'green',
    actions: [{ icon: 'close', color: 'white' }]

  })
}
