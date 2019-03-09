import loginServices from '../services/login'

var userAtstart = ''

if(window.localStorage.getItem('blogUser') !== null) {
  console.log('moi')
  var user = JSON.parse(window.localStorage.getItem('blogUser'))
  userAtstart = user.username
  console.log(userAtstart)
}
const initialUser = userAtstart

const reducer = (state = initialUser, action) => {
  switch(action.type) {

  case 'LOGIN':
    var credentials = window.localStorage.getItem('blogUser')
    var info = JSON.parse(credentials)
    if(credentials === undefined) {
      return state
    }
    return info.username

  case 'LOGOUT':
    window.localStorage.removeItem('blogUser')
    return ''

  default: return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    const user = await loginServices.login({ username, password })
    window.localStorage.setItem('blogUser', JSON.stringify(user))
    dispatch({
      type: 'LOGIN',
    })
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default reducer

