// @flow
import { update } from './state'

export const UPDATE_USER = 'UPDATE_USER'

export const updateUser = (payload: Object) => update({
  type: UPDATE_USER,
  payload
})

export const updateFirstName = (firstName: string) => updateUser({ firstName })

export const updateLastName = (lastName: string) => updateUser({ lastName })
