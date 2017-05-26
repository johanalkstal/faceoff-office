// @flow
export default (model: Object) => ({
  user: model.user,
  userName: `${model.user.firstName} ${model.user.lastName}`
})
