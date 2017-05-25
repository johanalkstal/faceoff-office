// @flow
import m from 'mithril'
import { model } from './state'
import home from './views/home'
import layout from './views/layout/layout'
import signIn from './views/sign-in'

/**
 * Application routes.
 */
export default {
  '/': {
    onmatch: () => model().isAuthenticated
      ? m(layout(model), m(home(model)))
      : m.route.set('/sign-in')
  },
  '/sign-in': {
    render: () => m(layout(model), m(signIn(model)))
  }
}
