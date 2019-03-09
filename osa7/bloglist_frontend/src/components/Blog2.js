import React, { useState } from 'react'
import blogService from './../services/blogs'
import { connect } from 'react-redux'

const Blog = ({ blog }) => {
  const [blogState, setBlogstate] = useState(true)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleBlogState = () => {
    setBlogstate(!blogState)
  }

  const like = () => {
    console.log(blog)
    blogService.like(blog)
  }

  const deleteBlog = () => {
    if (window.confirm(`Haluatko poistaa blogin ${blog.title}`)) {
      console.log(`Poistetaan blogi ${blog.title}`)
      blogService.deleteBlog(blog)
      window.alert(`Poistettiin blogi ${blog.title}`)
    } else {
      console.log(`Ei poistettu blogia ${blog.title}`)
    }
  }

  const small = () => {
    return (
      <div style={blogStyle}>
        <div>
          <button onClick={handleBlogState}>
            Näytä tiedot
          </button>
        </div>
        {blog.title} {blog.author}

      </div>
    )

  }

  const big = () => {
    console.log(blog.user)
    return (
      <div style={blogStyle}>
        <div>
          <button onClick={handleBlogState}>
            Pienennä
          </button>
        </div>
        <div>
          {blog.title}, {blog.author}
        </div>
        <div>
          {blog.url}
        </div>
        <div>
          {blog.likes} <button onClick={like}>like
          </button>
        </div>
        <div>
          added by {blog.user.username}
        </div>
        <div>
          <button onClick={deleteBlog}>poista blogi</button>
        </div>
      </div>
    )

  }

  return (
    <div>
      {
        blogState ?
          small() :
          big()}
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const connectedBlogs = connect(
  mapStateToProps
)(Blog)

export default connectedBlogs