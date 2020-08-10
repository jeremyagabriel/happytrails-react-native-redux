import * as Actions from './actionTypes'

export const signUp = token => ({
  type: Actions.SIGNUP,
  payload: token
})

export const signIn = token => ({
  type: Actions.SIGNIN,
  payload: token
})

export const signOut = () => ({
  type: Actions.SIGNOUT
})

export const addSignUpError = errorMessage => ({
  type: Actions.ADD_SIGNUP_ERROR,
  payload: errorMessage
})

export const addSignInError = errorMessage => ({
  type: Actions.ADD_SIGNIN_ERROR,
  payload: errorMessage
})