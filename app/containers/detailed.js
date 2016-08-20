import { connect } from 'react-redux'

import Detailed from '../components/detailed'

const mapStateToProps = (state, ownProps) => {
  return {
    issue: state.issues.filter(issue => issue.id == ownProps.id)
  }
}

export default connect(
  mapStateToProps
)(Detailed)
