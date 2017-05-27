// @flow
export default (model: Object) => ({
  email: model.signIn.email,
  error: model.signIn.error
})
