const SEARCH_CHANGE_VALUE = 'SEARCH_CHANGE_VALUE'

const defaultState = {
  value: '',
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_CHANGE_VALUE:
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state
  }
}

export const setInputValue = data => {
  return {
    type: SEARCH_CHANGE_VALUE,
    payload: data,
  }
}

export default searchReducer
