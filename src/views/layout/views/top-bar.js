// @flow
import m from 'mithril'
import styles from './top-bar.css'

export const viewModel = (model: Object) => ({
  userName: `${model.user.firstName} ${model.user.lastName}`
})

export default (model: Object) => ({
  oninit: (vnode: Object) => {
    vnode.vm = model.map(viewModel)
  },
  view: (vnode: Object) =>
    m('header', { class: styles.topBar }, [
      m('p', `Welcome, ${vnode.vm().userName}`)
    ])
})
