import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import _ from 'lodash'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => _.orderBy(state,'votes').reverse())
  const dispatch = useDispatch()

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => dispatch(addVote(anecdote.id))} />
        )}
      </div>
    )
}

export default AnecdoteList