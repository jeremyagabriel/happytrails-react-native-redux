import * as Actions from './actionTypes'

const initialState = {
  token: null,
  isSignedIn: false,
  signUpError: '',
  signInError: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SIGNUP:
      return {...state, signUpError: '', token: action.payload}
    case Actions.SIGNIN:
      return {...state, signInError: '', token: action.payload}
    case Actions.SIGNOUT:
      return {...state, token: null}
    case Actions.ADD_SIGNUP_ERROR:
      return {...state, signUpError: action.payload}
    case Actions.ADD_SIGNIN_ERROR:
      return {...state, signInError: action.payload}
    default:
      return state  
  }
}