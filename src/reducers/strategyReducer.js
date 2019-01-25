import { ADD_STRATEGY, UPDATE_STRATEGY } from '../actions/actionCreators.js'

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
  formattedStrategyData: {}

};

export default function strategyReducer(state = defaultState, action){
  switch(action.type){
    case 'ADD_STRATEGY':
      var newState = {...state}
      newState.strategyData.map(strategy => {
        newState.formattedStrategyData[strategy.name] = 0
      })
      return newState
    // case 'UPDATE_STRATEGY':
    //   var newState = {...state}
    //
    // case 'FETCH_ARTWORK_SEARCH':
    //   return {...state, submitted: true, artworkSearch: action.payload}
    // case 'FETCH_ALL_COLLECTIONS':
    //   return {...state, collectionLoading: true, allCollections: action.payload}
    // case 'FETCH_COLOR_IMAGE':
    //   return {...state, colorLoading: true, colorImage: action.payload}
    default:
      return state;
  }
};
