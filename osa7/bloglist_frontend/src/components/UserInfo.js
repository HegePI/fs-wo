import React from 'react'

const UserInfo = ({ userInfo }) => {
  if(userInfo === undefined) {
    return null
  } else {
    return (
      <div>
        <h2>Moi</h2>
        <div>
          <h2>{userInfo.name}</h2>
          <h3>Added blogs</h3>
          <ul>
            {userInfo.blogs.map(blog =>
              <li key={blog.id}>{blog.title}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserInfo