import { Context } from '@koishijs/client'

import Notify from './notify.vue'

export default (ctx: Context) => {
  ctx.slot({ type: 'plugin-details', component: Notify, order: -600 })
}
