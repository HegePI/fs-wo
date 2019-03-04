import React from 'react'
import NewAnecdoteForm from './components/newAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notifications from './components/Notification'

const App = (props) => {

  return (
    <div>
      <Notifications store={props.store}/>
      <AnecdoteList store ={props.store}/>
      <NewAnecdoteForm store={props.store}/>
    </div>
  )
}

export default App
