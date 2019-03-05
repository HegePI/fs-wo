import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, reset } from '../reducers/notificationReducer'



const AnecdoteList = (props) => {
  console.log(props)
  const anecdotes = props.anecdotes
  console.log(anecdotes)

  const Vote = ({ anecdote }) => () => {
    console.log(props)
    console.log(anecdote.id)
    props.vote(anecdote.id)
    props.voteNotification(anecdote)
    setTimeout(() => {
      props.reset()
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

const mapStateToProps  = (state) => {
  return {
    anecdotes: state.anecdotes,
  }
}

const mapDispatchToProps = {
  vote,
  voteNotification,
  reset

}

const connectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default connectedAnecdotes