// @flow

export default (model: Object) => ({
  username: `${model.user.firstName} ${model.user.lastName}`
})
