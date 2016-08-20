import React, { PropTypes } from 'react'
import Radium from 'radium'

const PerPage = ({ showPerPage }) => {
  return (
    <div style={styles.block}>
      <label>How many issues to show on page</label>
      <select onChange={e => {
        showPerPage(e.target.value)
      }} defaultValue="5" >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  )
}

const styles = {
  block: {
    float: 'right'
  }
}

PerPage.propTypes = {
  showPerPage: PropTypes.func.isRequired
}

export default Radium(PerPage)
