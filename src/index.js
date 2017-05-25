// @flow
import 'babel-polyfill'
import m from 'mithril'
import { model } from './state'
import routes from './routes'
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
 * Enables browser history mode by removing
 * the default hashbang prefix.
 */
m.route.prefix('')

/**
 * Mounts the routing enabled application into the root element.
 */
m.route(document.getElementById('root'), '/', routes(model))
