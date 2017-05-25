// @flow
import 'babel-polyfill'
import m from 'mithril'
import home from './views/home'
import layout from './views/layout/layout'
import signIn from './views/sign-in'
import { model } from './state'
import 'normalize.css'
import './index.css'

/**
 * Initial application model.
 */
const initialModel = {
  isAuthenticated: false,
  user: {
    firstName: 'Johan',
    lastName: 'Alkstål'
  }
}

/**
 * Set the application model stream.
 */
model(initialModel)

/**
 * Application routes.
 */
const routes = {
  '/': {
    onmatch: () => model().isAuthenticated
      ? m(layout(model), m(home(model)))
      : m.route.set('/sign-in')
  },
  '/sign-in': {
    render: () => m(layout(model), m(signIn(model)))
  }
}

/**
 * Enables browser history mode by removing
 * the default hashbang prefix.
 */
m.route.prefix('')

/**
 * Mounts the routing enabled application into the root element.
 */
m.route(document.getElementById('root'), '/', routes)
