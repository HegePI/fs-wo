const notificationReducer = (state = '', action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {

  case 'RESET':
    return ''


  case 'NOTIF':
    console.log(action.data)
    return action.data.message
  default:
    return state
  }
}

export const setNotification = (message, time) => {
  console.log(time)
  return async dispatch => {
    dispatch({
      type: 'NOTIF',
      data:{ message }
    })
    setTimeout(() => {
      console.log('moi2')
      dispatch({
        type: 'RESET'
      })
    }, time * 1000)

  }
}

export default notificationReducer