// @flow
import stream from 'mithril/stream'

const { assign } = Object

/**
 * A stream for functions that will update the model.
 * Every function given to the stream must have the following type:
 * (model) => model
 */
export let update = null

/**
 * Calls the update function from the update stream with the model
 * object as its parameter, thus updating the model.
 * @param {Object} model - the application model.
 * @param {function} updateModel- a function that takes the model as its parameter
 * @returns {Object} the updated model.
 */
const applyUpdate = (model, updateModel) => updateModel(model)

/**
 * Listens for changes in the update stream,
 * applies the changes to the application model
 * and returns a stream with the model as its value.
 * @param {Object} initialModel - the initial application model.
 * @returns {Object} a stream with the updated model as its value.
 */
const setModel = (initialModel: Object) => stream.scan(applyUpdate, initialModel, update)

/**
 * Sets a new update stream and application model stream.
 * @param {Object} initialModel - the initial application model.
 * @returns {Object} a stream with the application model as its value.
 */
export function start (initialModel: Object) {
  update = stream()
  return setModel(initialModel)
}
