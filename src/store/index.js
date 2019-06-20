import { combineReducers } from 'redux'
import listingReducer from '../modules/listingReducer'
import searchReducer from '../modules/searchReducer'

export default combineReducers({
  search: searchReducer,
  listing: listingReducer,
})
