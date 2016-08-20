import React, { PropTypes } from 'react'
import Radium from 'radium'

const SearchForm = ({ owner, repo, repos, updateOwner, updateRepo, findIssues, findRepos }) => {
  return (
    <form style={styles.form}>
      <input style={styles.item} type="text" placeholder="Аккаунт GitHub" onChange={e => {
        updateOwner(e.target.value)
        findRepos(e.target.value)
      }} value={owner} />
      <input style={styles.item} type="text" placeholder="Репозиторий" onChange={e => {
        updateRepo(e.target.value)
      }} value={repo} />
      <input style={styles.item} type="submit" value="Найти" onClick={e => {
        e.preventDefault()
        findIssues(owner, repo)
      }} />
      <div>
      {repos.map(repo =>
        <div
          style = {styles.autocomplete}
          onClick = {() => {
            updateRepo(repo)
            findIssues(owner, repo)
          }}
        >{repo}</div>
      )}
      </div>
    </form>
  )
}

const styles = {
  form: {
    width: '15%',
    float: 'left'
  },
  item: {
    padding: '5px',
    margin: '5px'
  },
  autocomplete: {
    padding: '5px',
    border: '1px solid black',
    cursor: 'pointer'
  }
}

SearchForm.propTypes = {
  owner: PropTypes.string,
  repo: PropTypes.string,
  updateOwner: PropTypes.func.isRequired,
  updateRepo: PropTypes.func.isRequired,
  findIssues: PropTypes.func.isRequired
}

export default Radium(SearchForm)
