// @flow
import { update } from './model'

const { assign } = Object

export function updateIsAuthenticated (value: boolean) {
  update(model => assign({}, model, {
    isAuthenticated: value
  }))
}

export function updateSignIn (value: Object) {
  update(model => assign({}, model, {
    signIn: assign({}, model.signIn, value)
  }))
}
