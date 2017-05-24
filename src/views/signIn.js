// @flow
import m from 'mithril'
import styles from './layout/layout.css'

export default {
  view: (viewnode: Object) =>
    m('div', [
      m('h1', { class: styles.title }, 'User'),
      m('p', { class: styles.text }, viewnode.attrs.vm().userName),
      m('input', {
        type: 'text',
        placeholder: 'First name',
        value: viewnode.attrs.vm().user.firstName,
        oninput: (event) => {
          viewnode.attrs.actions.updateFirstName(event.target.value)
        }
      }),
      m('input', {
        type: 'text',
        placeholder: 'Last name',
        value: viewnode.attrs.vm().user.lastName,
        oninput: (event) => {
          viewnode.attrs.actions.updateLastName(event.target.value)
        }
      })
    ])
}
