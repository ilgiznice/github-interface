import React, { PropTypes } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

const Issue = ({ issue }) => {
  return (
    <Link to={`issue/${issue.id}`}>
      <tr style={styles.container} >
        <td><img style={styles.image} src={issue.user.avatar_url}></img></td>
        <td>{issue.number}</td>
        <td>{issue.title}</td>
        <td>{issue.created_at}</td>
        <td>{issue.user.html_url}</td>
      </tr>
    </Link>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

const styles = {
  container: {
    padding: '5px'
  },
  image: {
    width: '100px',
    height: '100px'
  }
}

export default Radium(Issue)
