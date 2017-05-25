// @flow
import m from 'mithril'
import layout from '../../views/layout/view'
import view from './view'
import viewModel from './view-model'

export default (model: Object) => ({
  onmatch: () => model.isAuthenticated
  ? m(layout, { model }, m(view, { model: model.map(viewModel) }))
  : m.route.set('/sign-in')
})
