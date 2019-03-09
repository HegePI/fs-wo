import React from 'react'
import { connect } from 'react-redux'
import User from './User'

const Users = (props) => {
  const users = props.users

  return (
    <div>
      <h2>Users</h2>
      <h3>Name and how many blogs created</h3>
      <p />
      {users.map(user =>
        <User key={user.id} user={user } />)}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const connectedUsers = connect(
  mapStateToProps,
  null
)(Users)
export default connectedUsers