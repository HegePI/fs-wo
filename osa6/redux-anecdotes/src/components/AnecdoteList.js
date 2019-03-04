import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'




const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const Vote = ({ anecdote }) => () => {
    console.log('vote', anecdote.content)
    store.dispatch(
      vote(anecdote.id)
    )
    console.log('Näytetään ilmoitus')
    store.dispatch(
      voteNotification(anecdote)
    )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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