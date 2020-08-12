import * as Actions from './actionTypes'

const initialState = {
  trailCurrent: {},
  trailLat: 0,
  trailLon: 0
}

export const trailReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_TRAIL_CURRENT:
      return {...state, trailCurrent: action.payload}
    case Actions.SET_TRAIL_LOCATION:
      return {...state, trailLat: action.payload.lat, trailLon: action.payload.lon}
    default:
      return state  
  }
}