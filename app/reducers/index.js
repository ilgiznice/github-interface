import { combineReducers } from 'redux'

import { SEARCH, PAGINATION } from '../constants'

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

const paginationDefault = {
  showPerPage: 5,
  page: 1
}

const pagination = (state = paginationDefault, action) => {
  switch (action.type) {
    case PAGINATION.SHOW_PER_PAGE:
      return Object.assign({}, state, {
        page: 1,
        showPerPage: action.value
      })
    case PAGINATION.CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    default:
      return state
  }
}

const repos = (state = [], action) => {
  switch (action.type) {
    case SEARCH.FIND_REPOS:
      return state
    case SEARCH.FIND_REPOS_SUCCESS:
      return [...action.repos]
    case SEARCH.FIND_REPOS_ERROR:
      console.error(action.error)
      return state
    default:
      return state
  }
}

export default combineReducers({
  fields,
  issues,
  pagination,
  repos
})
