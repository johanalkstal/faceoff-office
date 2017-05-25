// @flow
import m from 'mithril'
import { updateFirstName, updateLastName } from '../actions'
import styles from './layout/layout.css'

const viewModel = (model: Object) => ({
  user: model.user,
  userName: `${model.user.firstName} ${model.user.lastName}`
})

const actions = {
  updateFirstName,
  updateLastName
}

export default (model: Object) => ({
  oninit: (vnode: Object) => {
    vnode.actions = actions
    vnode.vm = model.map(viewModel)
  },
  view: (vnode: Object) =>
    m('div', [
      m('h1', { class: styles.title }, 'User'),
      m('p', { class: styles.text }, vnode.vm().userName),
      m('input', {
        type: 'text',
        placeholder: 'First name',
        value: vnode.vm().user.firstName,
        oninput: (event) => {
          vnode.actions.updateFirstName(event.target.value)
        }
      }),
      m('input', {
        type: 'text',
        placeholder: 'Last name',
        value: vnode.vm().user.lastName,
        oninput: (event) => {
          vnode.actions.updateLastName(event.target.value)
        }
      })
    ])
})
