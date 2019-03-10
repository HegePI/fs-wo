import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Users = (props) => {
  const users = props.users

  return (
    <div>
      <h2>Users</h2>
      <p />
      <Table striped>
        <tbody>
          <tr>
            <td>
          User name
            </td>
            <td>
            blogs created
            </td>
          </tr>
          {users.map(user =>
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>)}
        </tbody>
      </Table>

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