import { connect } from 'react-redux'

import List from '../components/list'
import { changePage } from '../actions'

const mapStateToProps = (state) => {
  const from = (state.pagination.page - 1) * state.pagination.showPerPage
  const to = state.pagination.page * state.pagination.showPerPage
  return {
    issues: state.issues.slice(from, to),
    pages: Math.ceil(parseFloat(state.issues.length / state.pagination.showPerPage)),
    page: state.pagination.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => {
      dispatch(changePage(page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
