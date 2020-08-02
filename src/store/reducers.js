import * as Actions from './actionTypes'

const initialState = {
  token: null,
  isSignedIn: false,
  trailResults: [],
  trailCurrent: [],
  trailFavorites: [],
  signUpError: '',
  signInError: ''
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SIGNUP:
      return {...state, signUpError: '', token: action.payload}
    case Actions.SIGNIN:
      return {...state, signInError: '', token: action.payload}
    case Actions.SIGNOUT:
      return {...state, token: null}
    case Actions.SET_TRAIL_CURRENT:
      return {...state, trailCurrent: action.payload}
    case Actions.SET_TRAIL_RESULTS:
      return {...state, trailResults: action.payload}
    case Actions.ADD_SIGNUP_ERROR:
      return {...state, signUpError: action.payload}
    case Actions.ADD_SIGNIN_ERROR:
      return {...state, signInError: action.payload}
    default:
      return state  
  }
}