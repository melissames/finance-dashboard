import { ADD_STRATEGY, UPDATE_STRATEGY, STRATEGY_TOTAL } from '../actions/actionCreators.js'

const defaultState = {

  strategyData: [{
    "id": "1",
    "name": "S&P 500",
    "options": [{"years": "1", "value":"6.10"}]
  },
  {
    "id": "2",
    "name": "MSCI EAFE Index",
    "options": [{"years": "1", "value": "6.15"}]
  },
  {
    "id": "3",
    "name": "Dow Jones U.S Real Estate Index",
    "options": [{"years": "1", "value": "6.5"}]
  },
  {
    "id": "4",
    "name": "Bloomberg Commodity Index",
    "options": [{"years": "1", "value": "6.15"}]
  }],
  formattedStrategyData: {},
  strategyPercentage: null,
  oneHundredPercent: 'gray'

};

export default function strategyReducer(state = defaultState, action){
  switch(action.type){
    case ADD_STRATEGY:
      var newState = {...state};
      newState.strategyData.map(strategy => {
        newState.formattedStrategyData[strategy.name] = 0
      })
      return {
        ...newState,
        formattedStrategyData: {
          ...newState.formattedStrategyData
        }
      }
    case UPDATE_STRATEGY:
      var newState = {...state};
      for(let name in newState.formattedStrategyData){
        if(name === action.name){
          newState.formattedStrategyData[name] = parseInt(action.value)
        }
      }
      return {
        ...newState,
        formattedStrategyData: {
          ...newState.formattedStrategyData
        }
      }
    case STRATEGY_TOTAL:
      var newState = {...state};
      var total = 0
      var valueArray = Object.values(newState.formattedStrategyData)
      for(let value of valueArray){
        if(typeof value === 'number'){
          total += value;
        }
        if(total === 100){
          newState.oneHundredPercent = 'green';
        } else {
          newState.oneHundredPercent = 'red';
        }
      }
      return {
        ...newState,
        strategyPercentage: total
      }
    default:
      return state;
  }
};
