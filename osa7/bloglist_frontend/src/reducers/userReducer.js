import userServices from './../services/users'

const usersAtStart = []
const initialState = usersAtStart

const reducer = (state = initialState, action) => {
  console.log('State now: ', state)
  console.log('Action: ', action)

  switch(action.type) {
  case 'USERINIT':
    console.log(action.data)
    return action.data

  default: return state
  }
}

export const userInit = () => {
  return async dispatch => {
    const users = await userServices.getAll()
    console.log(users)
    dispatch({
      type: 'USERINIT',
      data: users
    })
  }
}

export default reducer