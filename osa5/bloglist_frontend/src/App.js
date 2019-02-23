import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import Newblog from './components/new_blog_form'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState([])
  const [userName, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [title, setTitle] = useState([])
  const [author, setAuthor] = useState([])
  const [url, setUrl] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const blogUserJSON = window.localStorage.getItem('blogUser')

    if (blogUserJSON) {
      const user = JSON.parse(blogUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const username = userName
      const user = await loginService.login({ username, password })

      window.localStorage.setItem('blogUser', JSON.stringify(user))

      console.log(user)

      setUser(user)
      setUsername('')
      setPassword('')

    } catch (exception) {
      setErrorMessage('käyttäjätunnus tai salasana virheellinen')
      setTimeout(() => {
        setErrorMessage(null)

      }, 5000)
    }
  }

  const handleNewBlog = async (event) => {
    event.preventDefault()
    try {
      const newBlog = {
        title: title,
        author: author,
        url: url,
        likes: 0
      }
      console.log(newBlog)
      const blog = await blogService.newBlog(newBlog)

      console.log(blog)

      setTitle('')
      setAuthor('')
      setUrl('')

    } catch (exception) {
      setErrorMessage('jokin meni pieleen')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }


  const logout = () => {
    window.localStorage.removeItem('blogUser')
  }

  if (user.length === 0) {
    return (
      <div>

        <Login
          handleLogin={handleLogin}
          userName={userName}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      </div>
    )
  } else {
    return (
      <div>
        <p>Logged in as {user.username}</p>

        <Newblog
          handleNewBlog={handleNewBlog}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          url={url}
          setUrl={setUrl}
        />

        <h2>blogs</h2>

        <button onClick={logout}>Logout</button>

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
  }
}



export default App