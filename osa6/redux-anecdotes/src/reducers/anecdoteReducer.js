const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
  case 'VOTE':
    console.log(action.data.id)
    var id = action.data.id
    console.log(id)
    var anec = state.find(an => an.id === id)
    var votedAnec = { ...anec, votes: anec.votes + 1 }
    return state.map(anecc => anecc.id !== id ? anecc : votedAnec)

  case 'NEW_ANECDOTE':
    var newAnec = action.data.content
    var newAnecdotes = [...anecdotesAtStart, newAnec]
    var newState = newAnecdotes.map(asObject)
    return newState

  default: return state
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const newAnecdote = (content) => {
  console.log(content)
  return {
    type: 'NEW_ANECDOTE',
    data: { content }
  }
}

export default reducer