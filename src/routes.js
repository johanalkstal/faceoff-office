// @flow
import m from 'mithril'
import { model, update } from './state'
import home from './views/home'
import layout from './views/layout/layout'
import signIn from './views/signIn'
import { updateFirstName, updateLastName } from './actions'
import { vmUser } from './view-models/index'

export default {
  '/': protectedRoute(home),
  '/sign-in': route(signIn, vmUser, { updateFirstName, updateLastName })
}

function route (view: { view: Function }, viewModel?: Function, actions?: Object) {
  return {
    render () {
      return m(layout, { vm: model },
        m(view, {
          actions,
          vm: viewModel ? model.map(viewModel): null
        })
      )
    }
  }
}

function protectedRoute (view: { view: Function }, viewModel?: Function) {
  return Object.assign({}, route(view, viewModel), {
    onmatch () {
      return model().isAuthenticated ? view : m.route.set('/sign-in')
    }
  })
}
