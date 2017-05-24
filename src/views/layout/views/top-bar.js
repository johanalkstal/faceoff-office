// @flow
import m from 'mithril'
import styles from './top-bar.css'

export default {
  view: (vnode: Object) => m('header', {
    class: styles.topBar
  }, [
    m('p', `Welcome, ${vnode.attrs.vm().userName}`)
  ])
}
