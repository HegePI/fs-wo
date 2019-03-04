const notificationReducer = (state = '', action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
  case 'VOTED':
    console.log(action.data.anecdote.content)
    return action.data.anecdote.content
  case 'NEW':
    console.log(action.data.anecdote)
    return action.data.anecdote
  default:
    return state
  }
}

export const voteNotification = (anecdote) => {
  return {
    type: 'VOTED',
    data: { anecdote }
  }
}

export const newAnecNotification = (anecdote) => {
  return {
    type: 'NEW',
    data: { anecdote }
  }
}

export default notificationReducer