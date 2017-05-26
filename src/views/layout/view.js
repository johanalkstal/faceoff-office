// @flow
import m from 'mithril'
import topBar from './top-bar/view'
import styles from './styles.css'

export default {
  view: (vnode: Object) =>
    m('div', [
      m(topBar),
      m('div', vnode.children)
    ])
}
