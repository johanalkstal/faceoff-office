// @flow
import 'babel-polyfill'
import m from 'mithril'
import { start } from './state'
import routes from './routes'
import './styles/normalize.css'
import './styles/elements.css'

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
const model = start(initialModel)

/**
 * Enables browser history mode by removing
 * the default hashbang prefix.
 */
m.route.prefix('')

/**
 * Mounts the routing enabled application into the root element.
 */
m.route(document.getElementById('root'), '/', routes(model))
