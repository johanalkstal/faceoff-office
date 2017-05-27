// @flow
export function signIn(event: Object) {
  event.preventDefault()
  const email = event.target.elements.email.value

  const promise = new Promise((resolve, reject) => {
    if (email === 'johan.alkstal@gmail.com') {
      resolve()
    } else {
      reject(new Error('Sign in failed'))
    }
  })

  return promise
}
