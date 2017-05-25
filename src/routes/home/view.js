// @flow
import m from 'mithril'
import styles from './styles.css'

export default {
  view: () =>
    m('div', [
      m('h1', { class: styles.title }, 'Home'),
      m('p', { class: styles.text }, 'Some content.')
    ])
}
