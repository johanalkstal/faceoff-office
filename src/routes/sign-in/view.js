// @flow
import m from 'mithril'
import styles from './styles.css'

type VNode = { attrs: { actions: Object, model: Function } }

export default {
  view: ({ attrs: { actions, model }}: VNode) =>
    m('div', { class: styles.signIn }, [
      m('div', { class: styles.box }, [
        m('form', { onsubmit: actions.signIn }, [
          m('h1', { class: styles.title }, 'Sign in'),
          m('label', { for: 'email'}, "Enter your email and we'll send you a sign in link"),
          m('input', {
            type: 'email',
            id: 'email',
            class: styles.input,
            value: model().email,
            placeholder: 'Enter your email',
            autofocus: true,
            oninput: m.withAttr('value', actions.updateEmail)
          }),
          m('span', model().error),
          m('div', { class: styles.buttons }, [
            m('button', {
              type: 'submit',
              class: styles.button
            }, 'Send')
          ])
        ])
      ])
    ])
}
