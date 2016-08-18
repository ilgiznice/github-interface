import React, { PropTypes } from 'react'

const SearchForm = ({ owner, repo, updateOwner, updateRepo, findIssues }) => {
  return (
    <form>
      <input type="text" placeholder="Аккаунт GitHub" onChange={e => {
        updateOwner(e.target.value)
      }} />
      <input type="text" placeholder="Репозиторий" onChange={e => {
        updateRepo(e.target.value)
      }} />
      <input type="submit" value="Найти" onClick={e => {
        e.preventDefault()
        findIssues(owner, repo)
      }} />
    </form>
  )
}

SearchForm.propTypes = {
  owner: PropTypes.string,
  repo: PropTypes.string,
  updateOwner: PropTypes.func.isRequired,
  updateRepo: PropTypes.func.isRequired,
  findIssues: PropTypes.func.isRequired
}

export default SearchForm
