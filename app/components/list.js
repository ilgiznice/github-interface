import React, { PropTypes } from 'react'
import Radium from 'radium'

import Issue from './issue'

const pagination = (pages, page, changePage) => {
  const array = []
  for (let i = 1; i <= pages; i++) {
    let stylesCombined = [styles.pagination]
    if (page === i) stylesCombined.push(styles.pagination.active)
    array.push(<div
      style = {stylesCombined}
      key = {i}
      onClick = {() => changePage(i)}
    >{i}</div>)
  }
  return array
}

const List = ({ issues, pages, page, changePage }) => {
  return (
    <div>
      <table>
        <thead>
          <th>Номер</th>
          <th>Название</th>
          <th>Дата открытия</th>
        </thead>
        <tbody>
        {issues.map(issue =>
          <Issue
            key = {issue.id}
            issue = {issue}
          />
        )}
        </tbody>
      </table>
      {pagination(pages, page, changePage)}
    </div>
  )
}

const styles = {
  pagination: {
    padding: '5px',
    display: 'inline-block',
    border: '1px solid black',
    cursor: 'pointer',
    active: {
      backgroundColor: 'green'
    }
  }
}

List.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
  }).isRequired),
  pages: PropTypes.number.isRequired,
  page: PropTypes.number,
  changePage: PropTypes.func.isRequired
}

export default Radium(List)
