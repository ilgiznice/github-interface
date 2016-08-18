import { combineReducers } from 'redux'

import SEARCH from '../constants'

const fields = (state = {}, action) => {
  switch (action.type) {
    case SEARCH.UPDATE_OWNER:
      return Object.assign({}, state, {
        owner: action.value
      })
    case SEARCH.UPDATE_REPO:
      return Object.assign({}, state, {
        repo: action.value
      })
    default:
      return state
  }
}

const issues = (state = [], action) => {
  switch (action.type) {
    case SEARCH.FIND_ISSUES:
      return state
    case SEARCH.FIND_ISSUES_SUCCESS:
      return [...action.issues]
    case SEARCH.FIND_ISSUES_ERROR:
      console.error(action.error)
      return state
    default:
      return state
  }
}

export default combineReducers({
  fields,
  issues
})
