import React, { useEffect } from 'react'
import { useField } from './hooks/index'
import Bloglist from './components/Bloglist'
import Login from './components/Login'
import blogService from './services/blogs'
import { connect } from 'react-redux'
import { initialize } from './reducers/blogReducer'
import { login, logout } from './reducers/userReducer'

const App = (props) => {
  const userName = useField('text')
  const passWord = useField('text')

  useEffect(() => {
    props.initialize()
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

  const logout = () => {
    props.logout()
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

  const blog = () => {
    return (
      <div>

        <p>{props.user} logged in</p>
        <button onClick={logout}>Logout</button>
        <p />
        <Bloglist />
      </div>
    )
  }

  return (
    <div>
      {props.user === '' ?
        login() :
        blog()
      }
    </div>
  )
}

const mapDispatchToProps = {
  initialize,
  login,
  logout
}

const mapStateToProps  = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)