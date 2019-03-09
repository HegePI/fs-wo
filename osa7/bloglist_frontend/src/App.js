import React, { useEffect } from 'react'
import { useField } from './hooks/index'
import Bloglist from './components/Bloglist'
import Login from './components/Login'
import Users from './components/userList'
import blogService from './services/blogs'
import { connect } from 'react-redux'
import { blogInit } from './reducers/blogReducer'
import { userInit } from './reducers/userReducer'
import { login, logout } from './reducers/loginReducer'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const App = (props) => {
  const userName = useField('text')
  const passWord = useField('text')

  useEffect(() => {
    props.blogInit()
  }, [])

  useEffect(() => {
    props.userInit()
  }, [])

  useEffect(() => {
    const blogUserJSON = window.localStorage.getItem('blogUser')

    if (blogUserJSON) {
      const user = JSON.parse(blogUserJSON)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const username = userName.value
      const password = passWord.value
      userName.reset()
      passWord.reset()
      props.login(username, password)


    } catch (exception) {
      console.log('Käyttäjätunnus tai salasana virheellinen')
    }
  }

  const login = () => {
    return (
      <Login
        handleLogin={handleLogin}
        userName={userName}
        password={passWord}
      />
    )
  }

  const LoginInfo = () => (
    <div>
      <p>{props.user} logged in</p>
      <button onClick={() => props.logout()}>Logout</button>
    </div>
  )


  const home = () => {
    return (
      <div>
        <LoginInfo />
        <Bloglist />
      </div>
    )
  }

  const users = () => {
    return (
      <div>
        <LoginInfo />
        <Users />
      </div>
    )
  }

  return (
    <Router>
      <div>
        <Route exact path="/" render={() =>
          props.user === '' ?
            login() :
            home()
        } />
        <Route path="/users" render={() =>
          props.user === '' ?
            login() :
            users()
        } />
      </div>
    </Router>
  )
}

const mapDispatchToProps = {
  blogInit,
  userInit,
  login,
  logout
}

const mapStateToProps  = (state) => {
  return {
    user: state.user,
    users: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)