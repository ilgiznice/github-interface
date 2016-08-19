import React, { PropTypes } from 'react'

const PerPage = ({ showPerPage }) => {
  return (
    <div>
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

PerPage.propTypes = {
  showPerPage: PropTypes.func.isRequired
}

export default PerPage
