// @flow
import m from 'mithril'
import actions from './actions'
import layout from '../../views/layout/view'
import view from './view'
import viewModel from './view-model'

export default (model: Object) => ({
  render: () => m(layout, { model }, m(view, {
    actions,
    model: model.map(viewModel)
  }))
})
