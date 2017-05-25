// @flow
import { pipe } from 'ramda'
import { update } from '../../state'
import { updateFirstName, updateLastName } from '../../actions'

export default {
  updateFirstName: pipe(updateFirstName, update),
  updateLastName: pipe(updateLastName, update)
}
