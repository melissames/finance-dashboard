export const ADD_STRATEGY = "ADD_STRATEGY"
export const UPDATE_STRATEGY = "UPDATE_STRATEGY"
export const STRATEGY_TOTAL = "CHECK_STRATEGY"
export const RESET_TOTAL = "CHECK_STRATEGY"
export const SUBMIT_STRATEGY = "SUBMIT_STRATEGY"

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

export let strategyTotal = () => {
  return {
    type: STRATEGY_TOTAL
  }
}

export let resetTotal = () => {
  return {
    type: RESET_TOTAL
  }
}

export let submittedStrategy = () => {
  return {
    type: SUBMIT_STRATEGY
  }
}
