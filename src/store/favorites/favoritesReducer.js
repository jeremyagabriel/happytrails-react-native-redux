import * as Actions from './actionTypes'

const initialState = {
  trailFavorites: null,
  trailFavoriteIds: null,
}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_TRAIL_FAVORITE_IDS:
      return {...state, trailFavoriteIds: action.payload}
    case Actions.SET_TRAIL_FAVORITES:
      return {...state, trailFavorites: action.payload}
    default:
      return state  
  }
}