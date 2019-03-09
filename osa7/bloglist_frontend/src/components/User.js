import React from 'react'

const User = (props) => {
  console.log(props.user)
  return (
    <div>
      {props.user.name}, {props.user.blogs.length} blogs created
      <p />
    </div>
  )
}

export default User