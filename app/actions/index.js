import { SEARCH, PAGINATION } from '../constants'

export function updateOwner (value) {
  return {
    type: SEARCH.UPDATE_OWNER,
    value
  }
}

export function updateRepo (value) {
  return {
    type: SEARCH.UPDATE_REPO,
    value
  }
}

export function findIssues (data) {
  return {
    type: SEARCH.FIND_ISSUES,
    data
  }
}

export function findIssuesSuccess (issues) {
  return {
    type: SEARCH.FIND_ISSUES_SUCCESS,
    issues
  }
}
export function findIssuesError (error) {
  return {
    type: SEARCH.FIND_ISSUES_SUCCESS,
    error
  }
}

export function showPerPage (value) {
  return {
    type: PAGINATION.SHOW_PER_PAGE,
    value
  }
}

export function changePage (page) {
  return {
    type: PAGINATION.CHANGE_PAGE,
    page
  }
}
