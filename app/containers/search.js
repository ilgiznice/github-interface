import { connect } from 'react-redux'

import { updateOwner, updateRepo, findIssues } from '../actions/'
import SearchForm from '../components/search'

const mapStateToProps = (state) => {
  return {
    owner: state.fields.owner,
    repo: state.fields.repo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOwner: (owner) => {
      dispatch(updateOwner(owner))
    },
    updateRepo: (repo) => {
      dispatch(updateRepo(repo))
    },
    findIssues: (owner, repo) => {
      const data = {
        owner,
        repo
      }
      dispatch(findIssues(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
