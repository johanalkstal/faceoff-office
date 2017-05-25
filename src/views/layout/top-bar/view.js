// @flow
import m from 'mithril'
import styles from './styles.css'

export default {
  view: (vnode: Object) =>
    m('header', { class: styles.topBar }, [
      m('p', `Welcome, ${vnode.attrs.model().userName}`)
    ])
}
