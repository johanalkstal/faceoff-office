// @flow

export default (model: Object) => ({
  userName: `${model.user.firstName} ${model.user.lastName}`
})
