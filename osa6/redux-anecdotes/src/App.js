import React from 'react'
import NewAnecdoteForm from './components/newAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notifications from './components/Notification'

const App = () => {

  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notifications />
      <AnecdoteList />
      <NewAnecdoteForm />
    </div>
  )
}

export default App
