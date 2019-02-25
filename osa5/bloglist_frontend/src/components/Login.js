import React from 'react'
import PropTypes from 'prop-types'
const Login = ({ handleLogin, userName, setUsername, password, setPassword }) => {

  Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired
  }

  return (
    <div>
      <h2>Kirjautuminen</h2>
      <form onSubmit={handleLogin}>
        <div>
                    Käyttäjätunnus
          <input
            type='Text'
            value={userName}
            name='username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
                    Salassana
          <input
            type='Text'
            value={password}
            name='password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>kirjaudu</button>

      </form>
    </div>
  )
}

export default Login