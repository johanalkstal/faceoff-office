// @flow
import stream from 'mithril/stream'
import { UPDATE_USER } from './actions'

const { assign } = Object
const initialModel = {
  isAuthenticated: false,
  user: {
    firstName: 'Johan',
    lastName: 'Alkstål'
  }
}

/**
 * The application model stream.
 */
export const model = stream(initialModel)

/**
 * The update function that updates the model stream.
 * @param action {Object} - An action object.
 */
export const update = (action: Object) => {
  switch (action.type) {
    case UPDATE_USER:
      updateUser(model, action.payload)
      return

    default:
      model(model())
  }
}

function updateUser (model, user) {
  const currentModel = model()
  const updatedModel = assign({}, currentModel, {
    user: assign({}, currentModel.user, user)
  })

  model(updatedModel)
}
