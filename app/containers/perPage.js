import { connect } from 'react-redux'

import { showPerPage } from '../actions/'
import PerPage from '../components/perPage'

const mapDispatchToProps = (dispatch) => {
  return {
    showPerPage: (value) => {
      dispatch(showPerPage(value))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PerPage)
