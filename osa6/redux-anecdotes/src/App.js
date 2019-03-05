import React, { useEffect } from 'react'
import NewAnecdoteForm from './components/newAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notifications from './components/Notification'
import { initialize } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'

const App = (props) => {

  useEffect(() => {
    props.initialize()
  }, [])


  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notifications />
      <AnecdoteList />
      <NewAnecdoteForm />
    </div>
  )
}

export default connect(null, { initialize })(App)
