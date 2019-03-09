import React, { useEffect } from 'react'
import { useField } from './hooks/index'
import Bloglist from './components/Bloglist'
import Login from './components/Login'
import Users from './components/userList'
import User from './components/UserInfo'
import Blog from './components/BlogInfo'
import blogService from './services/blogs'
import { connect } from 'react-redux'
import { blogInit } from './reducers/blogReducer'
import { userInit } from './reducers/userReducer'
import { login, logout } from './reducers/loginReducer'
import {
  BrowserRouter as Router,
  Route, Link
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

  const MenuBar = () => (
    <div>
      <Link to="/users">users</Link> <Link to="/blogs">blogs</Link> {props.user} logged in <button onClick={() => props.logout()}>Logout</button>
    </div>
  )


  const home = () => {
    return (
      <div>
        <MenuBar />
        <Bloglist />
      </div>
    )
  }

  const users = () => {
    return (
      <div>
        <MenuBar />
        <Users />
      </div>
    )
  }

  const userById = (id) =>
    props.users.find(u => u.id === id)

  const blogById = (id) =>
    props.blogs.find(b => b.id===id)



  return (
    <Router>
      <div>
        <Route exact path="/" render={() =>
          props.user === '' ?
            login() :
            home()
        } />
        <Route exact path="/users" render={() =>
          props.user === '' ?
            login() :
            users()
        } />
        <Route exact path="/users/:id" render={({ match }) =>
          props.user === '' ?
            login():
            <div>
              <MenuBar />
              <User userInfo={userById(match.params.id)} />
            </div>
        } />
        <Route exact path="/blogs" render={() =>
          props.user === '' ?
            login():
            home()
        }/>
        <Route exact path="/blogs/:id" render={({ match }) =>
          props.user === '' ?
            login():
            <div>
              <MenuBar />
              <Blog blogInfo={blogById(match.params.id)} />
            </div>
        }/>
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
    users: state.users,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)