// @flow
import m from 'mithril'
import home from './home/route'
import signIn from './sign-in/route'

/**
 * Application routes.
 */
export default (model: Function) => ({
  '/': home(model),
  '/sign-in': signIn(model)
})

