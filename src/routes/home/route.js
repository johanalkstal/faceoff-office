// @flow
import m from 'mithril'
import layout from '../../views/layout/view'
import view from './view'
import viewModel from './view-model'

export default (model: Function) => ({
  onmatch: () => {
    if (!model().isAuthenticated) {
      m.route.set('/sign-in')
    }
  },
  render: () =>
    m(layout, { model }, m(view, { model: model.map(viewModel) }))
})
