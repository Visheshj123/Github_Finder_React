import React, { Fragment, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/spinner'
import { Link } from 'react-router-dom'
import Repo from '../repos/repos'
import GithubContext from '../../context/github/githubContext'

const OneUser = (props) => {
  const githubContext = useContext(GithubContext)
  useEffect(() => {
    githubContext.getUser(props.match.params.login) //sets state of user, now we have basic information on user
    githubContext.getUserRepos(props.match.params.login)
  },[]);


  const { name , avatar_url, location, html_url, bio, public_repos, login, company, followers, following, public_gists } = githubContext.user;
  const { loading } = props;
  if (loading) return <Spinner></Spinner>
  return(<Fragment>
    <Link to={'/'} className= 'btn btn-light'>Back to Search</Link>
    <div className="card grid-2">
      <div className="all-center">
        <img src={avatar_url} alt="avater image" className="round-img" style={{width:'150px'}}/>
        <h1>{name}</h1>
        <p>{location}</p>
      </div>
      <div>
        {bio && <Fragment>
              <h3>Bio</h3>
               <p>{bio}</p>
          </Fragment>}
          <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
          <ul>
          <li>{login && <Fragment>
              <strong>Username:</strong> {login}
            </Fragment>}</li>
            <li>{company && <Fragment>
                <strong>Company:</strong> {company}
              </Fragment>}</li>
          </ul>
      </div>
    </div>

    <div className="card text-center">
      <div className="badge badge-primary">Followers: {followers}</div>
      <div className="badge badge-success">Following: {following}</div>
      <div className="badge badge-light">Public Repos: {public_repos}</div>
      <div className="badge badge-dark">Public Gists: {public_gists}</div>
    </div>
    <Repo repos={githubContext.repos}></Repo>

    </Fragment>)


}

/*neUser.propTypes = {
 loading: PropTypes.bool,
 user: PropTypes.object.isRequired,
 getUser: PropTypes.func.isRequired,
 getUserRepos: PropTypes.func.isRequired,
 Repos: PropTypes.array.isRequired
}*/

export default OneUser;
