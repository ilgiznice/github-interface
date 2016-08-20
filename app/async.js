import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'

import { SEARCH } from './constants/'
import { findIssuesSuccess, findIssuesError, findReposSuccess, findReposError } from './actions/'
import API from './api/'

function * fetchIssues (action) {
  try {
    const issues = yield call(API.fetchIssues, action.data)
    yield put(findIssuesSuccess(issues))
  } catch (e) {
    yield put(findIssuesError(e.message))
  }
}

function * fetchRepos (action) {
  try {
    const repos = yield call(API.fetchRepos, action.data)
    yield put(findReposSuccess(repos))
  } catch (e) {
    yield put(findReposError(e.message))
  }
}

function * watchFetchIssues () {
  yield * takeEvery(SEARCH.FIND_ISSUES, fetchIssues)
}

function * watchFetchRepos () {
  yield * takeEvery(SEARCH.FIND_REPOS, fetchRepos)
}

export default function * async () {
  yield [
    fork(watchFetchIssues),
    fork(watchFetchRepos)
  ]
}
