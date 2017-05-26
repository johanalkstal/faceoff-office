/* globals describe, test, expect */
import { updateUser } from './actions'
import { start, update } from './state'

describe('update', () => {
  test('is null until start() is called', () => {
    expect(update).toEqual(null)
  })
})

describe('start', () => {
  test('defines update', () => {
    start({})

    expect(typeof update).toEqual('function')
  })

  test('returns a model stream', () => {
    const initialModel = { name: 'Joe Programmer' }

    const model = start(initialModel)

    expect(model()).toEqual(initialModel)
  })
})

test('start and update updates the application model', () => {
  const initialModel = { name: 'Joe Programmer' }

  const model = start(initialModel)

  const newName = 'Jane Programmer'

  update((model) => {
    model.name = newName
    return model
  })

  expect(model().name).toEqual(newName)
})
