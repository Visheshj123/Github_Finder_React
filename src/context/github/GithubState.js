//Initial State and Actions
import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'


//global inital state
const GithubState =  (props) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  /*const res =  await axios.get(`https://api.github.com/users`,{
    headers: {
      "Authorization": process.env.REACT_APP_GITHUB_TOKEN
    }
  })
    dispatch({type: 'default', payload: res.data})*/

  //default users
  const defaultUsers = async () => {
    const res =  await axios.get(`https://api.github.com/users`,{
      headers: {
        "Authorization": process.env.REACT_APP_GITHUB_TOKEN
      }
    })
    dispatch({ type:SEARCH_USERS, payload: res.data })
  }


  //Search User
   const searchUsers = async (user) => {
     setLoading(true)
     const res =  await axios.get(`https://api.github.com/search/users?q=${user}`,{
       headers: {
         "Authorization": process.env.REACT_APP_GITHUB_TOKEN
       }
     })

     dispatch({type: SEARCH_USERS,
     payload: res.data.items})
   };


  //Get User
  const getUser = async (username) => {
    setLoading()
    const res =  await axios.get(`https://api.github.com/users/${username}`,{
      headers: {
        "Authorization": process.env.REACT_APP_GITHUB_TOKEN
      }
    })
    dispatch({ type:GET_USER, payload: res.data })
  }

  //Get repos

  //Clear Users
  const clearUsers = () => {
    //.setState({ users: [], loading: false })
    dispatch({ type: CLEAR_USERS, payload: [] })
  }

  //Set loading
  const setLoading = () =>{
    dispatch({ type: SET_LOADING })
  }

  const getUserRepos = async (username) => {
    setLoading()
    const res =  await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created&order=asc`,{
      headers: {
        "Authorization": process.env.REACT_APP_GITHUB_TOKEN
      }
    })
    //.setState({ repos: res.data, loading: false })
    dispatch({type:GET_REPOS, payload:res.data})
    //setRepos(res.data)
    //setLoading(false)
  }

  return (<GithubContext.Provider value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    clearUsers,
    searchUsers,
    getUser,
    getUserRepos,
    defaultUsers

  }}>
    {props.children}
  </GithubContext.Provider>)

}

export default GithubState
