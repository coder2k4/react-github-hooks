import React, {useReducer} from 'react'
import GithubContext from "./GithubContext";
import {GithubReducer} from "./GithubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../type";
import axios from "axios";

const GithubState = props =>
  {
      const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
      const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

      const initialState = {
          user: {},
          users: [],
          loading: false,
          repos: []
      }
      const [state, dispatch] = useReducer(GithubReducer, initialState)
      const withCreds = url => `${url}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

      const setLoading = () => dispatch({type: SET_LOADING})

      const clearUsers = () => dispatch({type: CLEAR_USERS})

      const getRepos = async name => {
          setLoading()

          const responce = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=5`))

          dispatch(
              {
                  type: GET_REPOS,
                  payload: responce.data
              }
          )
      }

      const getUser = async name => {
          setLoading()

          const responce = await axios.get(withCreds(`https://api.github.com/users/${name}?`))

          dispatch(
              {
                  type: GET_USER,
                  payload: responce.data
              }
          )
      }

      const searchUsers = async value => {
          setLoading()

          const responce = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}`))

          dispatch(
              {
                  type: SEARCH_USERS,
                  payload: responce.data.items
              }
          )
      }



      const {user, users, repos, loading} = state

      return (
          <GithubContext.Provider value={{
              setLoading, clearUsers, getRepos, getUser, searchUsers,
              user, users, repos, loading
          }}>
              {props.children}
          </GithubContext.Provider>
      )
  }

export default GithubState