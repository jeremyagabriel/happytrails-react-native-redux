import * as Actions from './actionTypes'

export const signIn = () => ({
  type: Actions.SIGNIN
})

export const signOut = () => ({
  type: Actions.SIGNOUT
})

export const setTrailCurrent = trail => ({
  type: Actions.SET_TRAIL_CURRENT,
  payload: trail
})

export const setTrailResults = trails => ({
  type: Actions.SET_TRAIL_RESULTS,
  payload: trails
})

export const addSignUpError = errorMessage => ({
  type: Actions.ADD_SIGNUP_ERROR,
  payload: errorMessage
})

export const addSignInError = errorMessage => ({
  type: Actions.ADD_SIGNIN_ERROR,
  payload: errorMessage
})

export const signUp = token => ({
  type: Actions.SIGNUP,
  payload: token
})