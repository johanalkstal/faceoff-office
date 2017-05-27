// @flow
import m from 'mithril'
import { updateIsAuthenticated, updateSignIn } from '../../modules/actions'
import { signIn } from '../../modules/auth'

export default {
  updateEmail: (email: string) => updateSignIn({ email }),
  signIn: (event: Object) => {
    updateSignIn({ error: '' })
    signIn(event)
      .then(() => {
        updateIsAuthenticated(true)
        m.route.set('/')
      }, (err) => {
        updateSignIn({ error: err.message })
        m.redraw()
      })
  }
}
