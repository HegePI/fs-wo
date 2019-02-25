import React from 'react'
//import PropTypes from 'prop-types'

const Login = ({
  handleLogin,
  userName,
  password }) => {

  const userAttr = {
    type: userName.type,
    value: userName.value,
    onChange: userName.onChange
  }

  const pswdAttr = {
    type: password.type,
    value: password.value,
    onChange: password.onChange
  }

  /*const username = useField('text')
  const pswd = useField('text')*/

  /*Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    //setUsername: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    //setPassword: PropTypes.func.isRequired
  }*/

  return (
    <div>
      <h2>Kirjautuminen</h2>
      <form onSubmit={handleLogin}>
        <div>
          Käyttäjätunnus
          <input {...userAttr} />
        </div>
        <div>
          Salasana
          <input {...pswdAttr} />
        </div>
        <button type='submit'>kirjaudu</button>

      </form>
    </div>
  )
}

export default Login