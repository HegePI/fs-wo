import React from 'react'
import { connect } from 'react-redux'
import { addComment } from './../reducers/blogReducer'

const NewComment = (props) => {

  const Addcomment = (event) => {
    event.preventDefault()
    const comment = event.target.comment.value
    console.log(comment)
    console.log(props.id)
    props.addComment(props.id, comment)
    event.target.comment.value = ''
  }

  return (
    <div>
      <h3>Lisää kommentti</h3>
      <form onSubmit={Addcomment}>
        <input type="text" name="comment"></input>
        <button type="submit">add comment</button>

      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addComment
}

const connectedNewcomment = connect(
  null,
  mapDispatchToProps
)(NewComment)

export default connectedNewcomment