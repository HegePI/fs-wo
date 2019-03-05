import anecServices from '../services/anecdotes'

const anecdotesAtStart = [/*
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
*/]

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
    console.log(action.data.anecdote)
    var id = action.data.anecdote.id
    var anec = action.data.anecdote
    var votedAnec = { ...anec, votes: anec.votes + 1 }
    console.log(votedAnec)
    var response = anecServices.vote(votedAnec)
    console.log(response.data)
    return state.map(anecc => anecc.id !== id ? anecc : votedAnec)

  case 'NEW_ANECDOTE':
    var newAnecdote = asObject(action.data.newAnec.content)
    action.data.anecdotes = [...action.data.anecdotes, newAnecdote]
    return action.data.anecdotes

  case 'INIT':
    console.log(action.data.data)
    return action.data.data

  default: return state
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    console.log(anecdote)
    dispatch({
      type: 'VOTE',
      data: { anecdote }
    })
  }
}

export const newAnecdote = (content, anecdotes) => {
  return async dispatch => {
    console.log(content)
    console.log(anecdotes)
    const newAnec = await anecServices.createNew(content)
    console.log(newAnec)

    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        newAnec,
        anecdotes: anecdotes
      }
    })
  }
}

export const initialize = () => {
  return async dispatch => {
    const anecdotes = await anecServices.getAll()
    console.log(anecdotes)
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default reducer