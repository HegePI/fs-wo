import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import User from './User'

const Users = (props) => {
  const users = props.users

  return (
    <div>
      <h2>Users</h2>
      <h3>Name and how many blogs created</h3>
      <p />
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              <User user={user} />
            </Link>
          </li>)}
      </ul>

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