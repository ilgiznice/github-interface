import React, { PropTypes } from 'react'

import Issue from './issue'

const List = ({ issues }) => {
  return (
    <div>
      {issues.map(issue =>
        <Issue
          key = {issue.id}
          issue = {issue}
        />
      )}
    </div>
  )
}

List.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
  }).isRequired)
}

export default List
