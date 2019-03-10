import React, { useEffect } from 'react'
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
import { Navbar, Nav } from 'react-bootstrap'

const App = (props) => {

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

  const MenuBar = () => (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link to="/users">users</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/blogs">blogs</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {props.user} logged in <button onClick={() => props.logout()}>Logout</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
    <div className="container">
      <Router>
        <div>
          <Route exact path="/" render={() =>
            props.user === '' ?
              <Login /> :
              home()
          } />
          <Route exact path="/users" render={() =>
            props.user === '' ?
              <Login /> :
              users()
          } />
          <Route exact path="/users/:id" render={({ match }) =>
            props.user === '' ?
              <Login />:
              <div>
                <MenuBar />
                <User userInfo={userById(match.params.id)} />
              </div>
          } />
          <Route exact path="/blogs" render={() =>
            props.user === '' ?
              <Login />:
              home()
          }/>
          <Route exact path="/blogs/:id" render={({ match }) =>
            props.user === '' ?
              <Login />:
              <div>
                <MenuBar />
                <Blog blogInfo={blogById(match.params.id)} />
              </div>
          }/>
        </div>
      </Router>
    </div>
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