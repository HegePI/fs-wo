const notificationReducer = (state = '', action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
  case 'VOTED':
    //console.log(action.data.anecdote.content)
    var voteNotif = `You voted: ${action.data.anecdote.content}`
    return voteNotif
  case 'NEW':
    //console.log(action.data.anecdote)
    var newNotif = `Created new anecdote: ${action.data.anecdote}`
    return newNotif
  case 'RESET':
    return ''
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
export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default notificationReducer