import React, { useState } from 'react'
import { connect } from 'react-redux'
import { newBlog, blogInit } from './../reducers/blogReducer'
import Blog from './Blog'
import Newblog from './../components/new_blog_form'
import Togglable from './../components/Togglable'


const BlogList = (props) => {
  const [title, setTitle] = useState([])
  const [author, setAuthor] = useState([])
  const [url, setUrl] = useState([])

  const blogs = props.blogs

  const blogRef = React.createRef()

  const handleNewBlog = async () => {
    blogRef.current.toggleVisibility()
    const newBlog = {
      title: title,
      author: author,
      url: url,
      likes: 0
    }
    props.newBlog(newBlog)
    props.blogInit()

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <div>
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}
const mapDispatchToProps = {
  newBlog, blogInit
}
const connectedBlogList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)

export default connectedBlogList