// @flow
import m from 'mithril'
import home from './routes/home/route'
import signIn from './routes/sign-in/route'

/**
 * Application routes.
 */
export default (model: Function) => ({
  '/': home(model),
  '/sign-in': signIn(model)
})

