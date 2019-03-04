import React from 'react'
import NewAnecdoteForm from './components/newAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notifications from './reducers/Notification'

const App = (props) => {

  return (
    <div>
      <AnecdoteList store ={props.store}/>
      <NewAnecdoteForm store={props.store}/>
      <Notifications store={props.store}/>
    </div>
  )
}

export default App
