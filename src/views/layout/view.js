// @flow
import m from 'mithril'
import topBar from './top-bar/view'
import topBarViewModel from './top-bar/view-model'
import styles from './styles.css'

export default {
  view: (vnode: Object) =>
    m('div', [
      m(topBar, { model: vnode.attrs.model.map(topBarViewModel) }),
      m('div', vnode.children)
    ])
}
