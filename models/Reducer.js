import { ADD_CARD } from './Type';

const initialState = {
  rangers: [],
  elastic: [],
  dynamo: [],
}

const Reducer = ( state = initialState, action ) => {
  switch (action.type){
    case ADD_CARD:
      if (action.team === 'rangers'){
        return {
          ...state, 
          rangers: [...state.rangers, ...action.payload]
        }
      } else if (action.team === 'elastic'){
        return {
          ...state, 
          elastic: [...state.elastic, ...action.payload]
        }
      } else if (action.team === 'dynamo'){
        return {
          ...state, 
          dynamo: [...state.dynamo, ...action.payload]
        }
      }
    default:
      return state;
  }
}

export default Reducer;