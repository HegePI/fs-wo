import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const anecdoteForm = (props) => {

  const NewAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.newAnecdote(anecdote, props.anecdotes)

    props.setNotification(`You created '${anecdote}'`, 5)
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
  setNotification
}



export default connect(mapStateToProps, mapDispatchToProps )(anecdoteForm)