
import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {

  const request = axios.get(baseUrl)
  return request.then(response => response.data)

}

const newBlog = async ({ blog }) => {
  console.log(blog)
  const title = blog.title
  const author = blog.author
  const url = blog.url
  const likes = blog.likes

  console.log(title)
  console.log(author)
  console.log(url)
  console.log(likes)

  const config = {
    headers: { Authrization: token },
  }

  console.log(config)
  const response = await axios.post(baseUrl, { title, author, url, likes }, config)
  console.log('moi')
  return response.data
}

const like = async (blog) => {

  console.log(blog)
  const putUrl = `${baseUrl}/${blog.id}`
  const response = await axios.put(putUrl, { blog })
  console.log(response)
  return response.data

}

const deleteBlog = async (blog) => {
  console.log(blog)
  const deleteUrl = `${baseUrl}/${blog.id}`
  const response = await axios.delete(deleteUrl, { blog })
  console.log(response)
  return response.data

}

const newComment = async ( id, comment ) => {
  console.log(id)
  const commentURL = `${baseUrl}/${id}/comments`
  const response = await axios.post(commentURL, { comment })
  return response.data
}

export default {
  getAll,
  setToken,
  newBlog,
  like,
  deleteBlog,
  newComment }