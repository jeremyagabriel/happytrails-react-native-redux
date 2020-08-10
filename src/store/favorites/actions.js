import * as Actions from './actionTypes'

export const setTrailFavoriteIds = trailIds => ({
  type: Actions.SET_TRAIL_FAVORITE_IDS,
  payload: trailIds
})

export const setTrailFavorites = trails => ({
  type: Actions.SET_TRAIL_FAVORITES,
  payload: trails
})