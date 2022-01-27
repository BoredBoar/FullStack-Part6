import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import _ from 'lodash'
import Notification from './Notification'
import Filter from './Filter'
import { displayNotification, clearNotification } from '../reducers/notificationReducer'

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
  const anecdotes = useSelector(state => _(state.anecdotes).filter(anecdote => anecdote.content.includes(state.filter))
                                                           .orderBy('votes')
                                                           .reverse().value())
  const dispatch = useDispatch()

    return (
      <div>
        <h2>Anecdotes</h2>
        <Notification />
        <Filter />
        {anecdotes.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => {
            dispatch(addVote(anecdote.id))
            dispatch(displayNotification(`You voted for '${anecdote.content}'`))
            setTimeout(() => {dispatch(clearNotification())}, 5000)
          }} />
        )}
      </div>
    )
}

export default AnecdoteList