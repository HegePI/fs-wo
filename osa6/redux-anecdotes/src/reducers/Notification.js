import React from 'react'

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log(store)
  return (
    <div style={style}>
      render here notification...
      {store.getState()}
    </div>
  )
}

export default Notification
