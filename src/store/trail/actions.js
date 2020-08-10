import * as Actions from './actionTypes'

export const setTrailCurrent = trail => ({
  type: Actions.SET_TRAIL_CURRENT,
  payload: trail
})

export const setTrailLocation = (lat, lon) => ({
  type: Actions.SET_TRAIL_LOCATION,
  payload: { lat, lon }
})