import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import Anecdotes from './AnecdoteList'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submitAnecdote = event => {
      event.preventDefault()
      console.log(event.target.content);
      dispatch(addAnecdote(event.target.content.value))
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