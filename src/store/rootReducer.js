import { combineReducers } from 'redux'
import { authReducer } from './auth/authReducer'
import { searchReducer } from './search/searchReducer'
import { favoritesReducer } from './favorites/favoritesReducer'
import { trailReducer } from './trail/trailReducer'
import { trailFavoriteReducer } from './trailFavorite/trailFavoriteReducer'

export default combineReducers({
  auth: authReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  trail: trailReducer,
  trailFavorite: trailFavoriteReducer
})