// @flow
import m from 'mithril'
import styles from './layout.css'
import topBar from './views/top-bar'
import { vmUser } from '../../view-models'

export default {
  view: (vnode: Object) => m('div', [
      m(topBar, { vm: vnode.attrs.vm.map(vmUser)}),
      m('div', vnode.children)
    ])
}
