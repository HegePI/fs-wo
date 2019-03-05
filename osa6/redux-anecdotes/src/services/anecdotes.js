import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response
}

const createNew = async (anecdote) => {
  console.log(anecdote)
  const response = await axios.post(url, { content: anecdote, votes: 0 })
  console.log(response)
  return response.data
}

const vote = async (anecdote) => {
  console.log(anecdote)
  const putURL = `${url}/${anecdote.id}`
  const response = await axios.put(putURL, { content: anecdote.content, id: anecdote.id, votes: anecdote.votes })
  console.log(response.data.anecdote)
  return response.data.anecdote
}

export default {
  getAll,
  createNew,
  vote
}