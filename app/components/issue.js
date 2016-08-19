import React, { PropTypes } from 'react'
import Radium from 'radium'

const Issue = ({ issue }) => {
  return (
    <tr style={styles.container} >
      <td>{issue.number}</td>
      <td>{issue.title}</td>
      <td>{issue.created_at}</td>
    </tr>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

const styles = {
  container: {
    padding: '5px'
  }
}

export default Radium(Issue)
