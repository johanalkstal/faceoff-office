// @flow
import { update } from './state'

export const UPDATE_USER = 'UPDATE_USER'

const createAction = (type: string) => (payload: Object) => update({
  type,
  payload
})

export const updateUser = createAction(UPDATE_USER)

export const updateFirstName = (firstName: string) => updateUser({ firstName })

export const updateLastName = (lastName: string) => updateUser({ lastName })
