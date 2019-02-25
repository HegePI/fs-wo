import React, { useState, useEffect } from 'react'
import { useField } from './hooks/index'
import Blog from './components/Blog'
import Login from './components/Login'
import Newblog from './components/new_blog_form'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState([])
  //const [userName, setUsername] = useState([])
  //const [password, setPassword] = useState([])
  const [title, setTitle] = useState([])
  const [author, setAuthor] = useState([])
  const [url, setUrl] = useState([])

  const userName = useField('text')
  const passWord = useField('text')

  useEffect(() => {
    console.log(blogService.getAll())
    blogService.getAll().then(blogs =>
      blogs.sort(function (a, b) {
        return b.likes - a.likes
      })
    )
      .then(blogs => {
        setBlogs(blogs)
      })
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
      const username = userName.value
      const password = passWord.value
      userName.reset()
      passWord.reset()
      const user = await loginService.login({ username, password })

      window.localStorage.setItem('blogUser', JSON.stringify(user))

      setUser(user)


    } catch (exception) {
      console.log('Käyttäjätunnus tai salasana virheellinen')
    }
  }

  const handleNewBlog = async (event) => {
    event.preventDefault()
    blogRef.current.toggleVisibility()
    try {
      const newBlog = {
        title: title,
        author: author,
        url: url,
        likes: 0
      }
      await blogService.newBlog(newBlog)

      setTitle('')
      setAuthor('')
      setUrl('')

    } catch (exception) {
      console.log('Jokin meni pieleen')
    }
  }

  const logout = () => {
    window.localStorage.removeItem('blogUser')
  }

  const blogRef = React.createRef()

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

        <p>{user.username} logged in</p>
        <button onClick={logout}>Logout</button>
        <h2>Blogs</h2>

        <Togglable buttonLabel='new blog' ref={blogRef}>
          <Newblog
            handleNewBlog={handleNewBlog}
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            url={url}
            setUrl={setUrl}
          />
        </Togglable>
        <p />

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
  }

  return (
    <div>
      {user.length === 0 ?
        login() :
        blog()
      }
    </div>
  )
}

export default App