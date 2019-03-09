import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { like, deleteBlog } from './../reducers/blogReducer'
import { connect } from 'react-redux'


const Blog = (props) => {
  console.log(props)
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
    console.log(props.blog)
    props.like(props.blog)
  }

  const deleteBlog = () => {
    if (window.confirm(`Haluatko poistaa blogin ${props.blog.title}`)) {
      console.log(`Poistetaan blogi ${props.blog.title}`)
      props.deleteBlog(props.blog)
      window.alert(`Poistettiin blogi ${props.blog.title}`)
    } else {
      console.log(`Peruttiin blogin poistaminen ${props.blog.title}`)
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
        <Link to={`/blogs/${props.blog.id}`}>
          {props.blog.title} by {props.blog.author}
        </Link>
      </div>
    )
  }

  const big = () => {
    console.log(props.blog.user)
    return (
      <div style={blogStyle}>
        <div>
          <button onClick={handleBlogState}>
            Pienennä
          </button>
        </div>
        <div>
          <Link to={`/blogs/${props.blog.id}`}>
            {props.blog.title} by {props.blog.author}
          </Link>
        </div>
        <div>
          {props.blog.url}
        </div>
        <div>
          {props.blog.likes} <button onClick={like}>like
          </button>
        </div>
        <div>
          added by {props.blog.user.username}
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

const mapDispatchToProps = {
  like, deleteBlog
}
const connectedBlog = connect(
  null,
  mapDispatchToProps
)(Blog)

export default connectedBlog