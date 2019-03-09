import React from 'react'

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