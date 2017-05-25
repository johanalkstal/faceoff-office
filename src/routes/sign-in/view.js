// @flow
import m from 'mithril'
import styles from './styles.css'

export default {
  view: (vnode: Object) =>
    m('div', [
      m('h1', { class: styles.title }, 'User'),
      m('p', { class: styles.text }, vnode.attrs.model().userName),
      m('input', {
        type: 'text',
        placeholder: 'First name',
        value: vnode.attrs.model().user.firstName,
        oninput: (event) => {
          vnode.attrs.actions.updateFirstName(event.target.value)
        }
      }),
      m('input', {
        type: 'text',
        placeholder: 'Last name',
        value: vnode.attrs.model().user.lastName,
        oninput: (event) => {
          vnode.attrs.actions.updateLastName(event.target.value)
        }
      })
    ])
}
