/* globals describe, test, expect */
import { start } from './state'
import { updateUser } from './actions'

test('updateUser updates the model.user', () => {
  const initialModel = { user: { name: 'Jane Programmer' } }
  const model = start(initialModel)

  const newUser = { name: 'Joe Programmer' }
  updateUser(newUser)

  expect(model().user).toEqual(newUser)
})
