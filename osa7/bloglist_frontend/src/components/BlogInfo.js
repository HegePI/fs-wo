import React from 'react'
import { like } from './../reducers/blogReducer'
import { connect } from 'react-redux'


const BlogInfo = (props) => {
  const blogInfo = props.blogInfo
  if(blogInfo === undefined) {
    return null
  } else {
    return (
      <div>
        <h2>{blogInfo.title}, {blogInfo.author}</h2>
        <div>
          {blogInfo.url}
        </div>
        <div>
          {blogInfo.likes} likes
          <button onClick={() => props.like(blogInfo)}>like</button>
        </div>
        <div>
          added by {blogInfo.user.name}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  like
}

const connectedBloginfo = connect(
  null,
  mapDispatchToProps
)(BlogInfo)
export default connectedBloginfo