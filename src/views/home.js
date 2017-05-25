// @flow
import m from 'mithril'
import styles from './layout/layout.css'

export default (model: Object) => ({
  view: (vnode: Object) =>
    m('div', [
      m('h1', { class: styles.title }, 'Home'),
      m('p', { class: styles.text }, 'Some content.')
    ])
})
