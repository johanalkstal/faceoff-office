// @flow
import { update } from './state'

const { assign } = Object

export function updateUser (user: Object) {
  update((model) => assign({}, model, {
    user: assign({}, model.user, user)
  }))
}
