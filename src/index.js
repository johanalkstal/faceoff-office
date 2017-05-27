// @flow
import 'babel-polyfill'
import m from 'mithril'
import initialModel from './initialModel'
import { trace } from 'meiosis'
import routes from './routes/routes'
import { start, update } from './modules/model'
import './styles/normalize.css'
import './styles/elements.css'

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

trace({update, dataStreams: [model]})
