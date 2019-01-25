const ADD_STRATEGY = "ADD_STRATEGY"
const UPDATE_STRATEGY = "UPDATE_STRATEGY"

export let addStrategies = data => {
  return {
    type: ADD_STRATEGY,
    data
  }
}

export let updateStrategy = (name, value) => {
  return {
    type: UPDATE_STRATEGY,
    name,
    value
  }
}
