import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { displayNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submitAnecdote = event => {
      event.preventDefault()
      dispatch(addAnecdote(event.target.content.value))
      dispatch(displayNotification(`You created anecdote '${event.target.content.value}'`))
      setTimeout(() => {dispatch(clearNotification())}, 5000)
      event.target.content.value = ''
    }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={submitAnecdote} >
          <div><input name='content' /></div>
          <button type='submit'>create</button>
        </form>
      </div>
    )
}

export default AnecdoteForm