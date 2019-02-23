
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

const newBlog = async ({ title, author, url }) => {
  console.log(title)
  console.log(author)
  console.log(url)

  const config = {
    headers: { Authrization: token },
  }

  console.log(config)

  const response = await axios.post(baseUrl, { title, author, url }, config)

  console.log('moi')
  return response.data
}

export default { getAll, setToken, newBlog }