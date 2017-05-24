// @flow
import 'babel-polyfill'
import m from 'mithril'
import routes from './routes'
import 'normalize.css'
import './index.css'

/**
 * Enables browser history mode by removing
 * the default hashbang prefix.
 */
m.route.prefix('')

/**
 * Mounts the routing enabled application into the root element.
 */
m.route(document.getElementById('root'), '/', routes)
