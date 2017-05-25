// @flow
import m from 'mithril'
import styles from './layout.css'
import topBar from './views/top-bar'

export default (model: Object) => ({
  view: (vnode: Object) =>
    m('div', [
      m(topBar(model)),
      m('div', vnode.children)
    ])
})
