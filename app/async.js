import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'

import { SEARCH } from './constants/'
import { findIssuesSuccess, findIssuesError } from './actions/'
import API from './api/'

function * fetchIssues (action) {
  try {
    const issues = yield call(API, action.data)
    yield put(findIssuesSuccess(issues))
  } catch (e) {
    yield put(findIssuesError(e.message))
  }
}

function * watchFetchIssues () {
  yield * takeEvery(SEARCH.FIND_ISSUES, fetchIssues)
}

export default function * async () {
  yield [
    fork(watchFetchIssues)
  ]
}
