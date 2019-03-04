import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'

const anecdoteForm = ({ store }) => {

  console.log(store)

  const NewAnecdote = (event) => {
    console.log(event)
    event.preventDefault()
    store.dispatch(
      newAnecdote(event.target.anecdote.value)
    )
    event.target.anecdote.value = ''
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