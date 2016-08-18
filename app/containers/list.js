import { connect } from 'react-redux'

import List from '../components/list'

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
}

export default connect(
  mapStateToProps
)(List)
