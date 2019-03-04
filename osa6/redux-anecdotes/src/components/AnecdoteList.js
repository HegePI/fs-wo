import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, reset } from '../reducers/notificationReducer'



const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const Vote = ({ anecdote }) => () => {
    store.dispatch(
      vote(anecdote.id)
    )
    store.dispatch(
      voteNotification(anecdote)
    )
    setTimeout(() => {
      store.dispatch(
        reset()
      )
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
              has {anecdote.votes}
            <button onClick={Vote({ anecdote })}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


export default AnecdoteList