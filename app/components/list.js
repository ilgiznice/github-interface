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
    <div style={styles.block}>
      <table>
        <thead>
          <th style={styles.th.avatar}></th>
          <th style={styles.th.number}>Номер</th>
          <th style={styles.th.title}>Название</th>
          <th style={styles.th.date}>Дата открытия</th>
          <th style={styles.th.link}>Ссылка на GitHub</th>
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
  block: {
    display: 'inline-block',
    width: '60%'
  },
  pagination: {
    padding: '5px',
    display: 'inline-block',
    border: '1px solid black',
    cursor: 'pointer',
    active: {
      backgroundColor: 'green'
    }
  },
  th: {
    avatar: {
      width: '100px'
    },
    number: {
      width: '50px'
    },
    title: {
      width: '250px'
    },
    date: {
      width: '150px'
    },
    link: {
      width: '200px'
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
