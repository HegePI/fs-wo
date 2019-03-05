import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { newAnecNotification, reset } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const anecdoteForm = (props) => {
  /*console.log(props)
  console.log(newAnecdote)
  console.log(props.newAnecdote)
  console.log(props.anecdotes)*/

  const NewAnecdote = (event) => {
    const anecdote = event.target.anecdote.value
    event.preventDefault()
    props.newAnecdote(anecdote, props.anecdotes)
    event.target.anecdote.value = ''
    props.newAnecNotification(anecdote)
    setTimeout(() => {
      props.reset()
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

const mapStateToProps  = (state) => {
  return {
    anecdotes: state.anecdotes,
  }
}

const mapDispatchToProps = {
  newAnecdote,
  newAnecNotification,
  reset

}



export default connect(mapStateToProps, mapDispatchToProps )(anecdoteForm)