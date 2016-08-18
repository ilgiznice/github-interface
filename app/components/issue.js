import React, { PropTypes } from 'react'
import Radium from 'radium'

const Issue = ({ issue }) => {
  return (
    <div style={styles.container} >
      <div style={[styles.item, styles.item.notLast]}>{issue.number}</div>
      <div style={[styles.item, styles.item.notLast]}>{issue.title}</div>
      <div style={styles.item}>{issue.created_at}</div>
    </div>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

const styles = {
  container: {
    border: '1px solid black',
    padding: '5px',
    display: 'flex'
  },
  item: {
    width: '30%',
    notLast: {
      borderRight: '1px solid black'
    }
  }
}

export default Radium(Issue)
