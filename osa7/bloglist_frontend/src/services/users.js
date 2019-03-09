import axios from 'axios'
const baseUrl = '/api/users'

const getAll = () => {
  console.log('moi userssista')
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }