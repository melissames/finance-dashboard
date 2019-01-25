export const ADD_STRATEGY = "ADD_STRATEGY"
export const UPDATE_STRATEGY = "UPDATE_STRATEGY"

export let addStrategies = () => {
  return {
    type: ADD_STRATEGY
  }
}

export let updateStrategy = (name, value) => {
  return {
    type: UPDATE_STRATEGY,
    name,
    value
  }
}
