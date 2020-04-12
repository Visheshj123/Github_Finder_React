import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import UserItem from './userItem'
import Spinner from '../layout/spinner'
import axios from 'axios'
import GithubContext from '../../context/github/githubContext'


const Users = (props) => {

  const githubContext = useContext(GithubContext)

  //TODO: On mount, we can set the users
  useEffect( () => {
    //check if current users list is empty, if so then run this
    githubContext.users.length == 0 && githubContext.defaultUsers()
  }, [])


  if(githubContext.loading){
    return  <Spinner></Spinner>
  }else{
  return (
    <div style={userStyle}>
      {githubContext.users.map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </div>
  )
  }
}

/*Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}*/

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}


export default Users;
