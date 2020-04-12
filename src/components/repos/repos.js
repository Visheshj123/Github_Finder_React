import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './repoItem'


const Repo = (props) => {
  return (
      props.repos.map(repo => (
        <RepoItem repo={repo} key={repo.id}></RepoItem>
      ))
  )
}

Repo.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repo
