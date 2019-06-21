const SET_LISTING_DATA = 'SET_LISTING_DATA'
const SET_INDEX = 'SET_INDEX'

const defaultState = {
  listingData: [],
  idx: 1,
}

const listingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LISTING_DATA:
      return {
        ...state,
        listingData: [...state.listingData, ...action.payload],
      }
    case SET_INDEX: {
      return {
        ...state,
        idx: action.payload,
      }
    }
    default:
      return state
  }
}

export const setListingData = data => {
  return {
    type: SET_LISTING_DATA,
    payload: data,
  }
}

export const setIndex = index => {
  return {
    type: SET_INDEX,
    payload: index,
  }
}

export default listingReducer
