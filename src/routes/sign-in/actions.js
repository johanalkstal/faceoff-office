// @flow
import { updateUser } from '../../actions'

export default {
  updateFirstName: (firstName: string) => updateUser({ firstName }),
  updateLastName: (lastName: string) => updateUser({ lastName })
}
