import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from './../reducers/loginReducer'

const Login = (props) => {

  const handleLogin = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.login(username, password)
  }

  return (
    <div>
      <h2>Kirjautuminen</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username" />

          <Form.Label>password</Form.Label>
          <Form.Control
            type="text"
            name="password" />

          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  login
}

const connectedLogin = connect(
  null,
  mapDispatchToProps
)(Login)
export default connectedLogin