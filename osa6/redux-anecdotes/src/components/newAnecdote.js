import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { newAnecNotification, reset } from '../reducers/notificationReducer'

const anecdoteForm = ({ store }) => {

  const NewAnecdote = (event) => {
    console.log(store.getState())
    event.preventDefault()
    store.dispatch(
      newAnecdote(event.target.anecdote.value, store.getState().anecdotes)
    )
    //console.log('Näytetään ilmoitus')
    store.dispatch(
      newAnecNotification(event.target.anecdote.value)
    )
    event.target.anecdote.value = ''
    setTimeout(() => {
      store.dispatch(
        reset()
      )
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={NewAnecdote}>
        <input name="anecdote"/>
        <p />
        <button type="submit">create</button>
      </form>
    </div>
  )

}

export default anecdoteForm