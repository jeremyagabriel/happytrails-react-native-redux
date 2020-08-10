import * as Actions from './actionTypes'

const initialState = {
  trailResults: null
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_TRAIL_RESULTS:
      return {...state, trailResults: action.payload}
    default:
      return state  
  }
}