import blogServices from './../services/blogs'

const blogsAtStart = []

const initialState = blogsAtStart

const reducer = (state = initialState, action) => {
  console.log('State now: ', state)
  console.log('Action: ', action)

  switch(action.type) {
  case 'LIKE':
    var id = action.data.blog.id
    var blog = action.data.blog
    var likedBlog = { ...blog, likes: blog.likes + 1 }
    blogServices.like(blog)
    return state.map(blog => blog.id !== id ? blog : likedBlog)

  case 'NEW_BLOG':
    var newBlog = action.data
    console.log(newBlog)
    blogServices.newBlog(newBlog)
    return state

  case 'DELETE':
    var deletedBlog = action.data.blog
    console.log(deletedBlog)
    state.splice(state.indexOf(deletedBlog))
    console.log(state)
    blogServices.deleteBlog(action.data.blog)
    return state

  case 'BLOGINIT':
    return action.data

  case 'COMMENT':
    blogServices.newComment(action.data.id, action.data.comment)
    return state

  default: return state
  }
}

export const like = (blog) => {
  return async dispatch => {
    dispatch({
      type: 'LIKE',
      data: { blog }
    })
  }
}

export const newBlog = (blog) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_BLOG',
      data: { blog }
    })
  }
}

export const deleteBlog = (blog) => {
  return async dispatch => {
    dispatch({
      type: 'DELETE',
      data: { blog }
    })

  }
}

export const blogInit = () => {
  return async dispatch => {
    const blogs = await blogServices.getAll()
    console.log(blogs)
    dispatch({
      type: 'BLOGINIT',
      data: blogs
    })
  }
}

export const addComment = ( id, comment ) => {
  console.log(id)
  console.log(comment)
  return async dispatch => {
    dispatch({
      type: 'COMMENT',
      data: {
        id: id,
        comment: comment
      }
    })
  }
}

export default reducer