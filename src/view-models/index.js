// @flow
import { update } from '../state'
import { updateUser } from '../actions'

export const vmUser = (model: Object) => ({
  user: model.user,
  userName: `${model.user.firstName} ${model.user.lastName}`,
})
