import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'
import {addVote, addAnecdote} from './anecdoteReducer'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

describe('anecdote reducer', () => {


  test('should return a initial state with 6 default anecdotes', () => {
    const init = {
      type: 'INIT_ANECDOTES',
      data: initialState
    }

    const newState = anecdoteReducer(undefined, init)
    expect(newState).toHaveLength(6)
  })

  test('adding vote to anecdote should result in incrementing vote total', () => {
    const init = {
      type: 'INIT_ANECDOTES',
      data: initialState
    }
    const state = anecdoteReducer(undefined,init)

    const vote = {
      type: 'ADD_VOTE',
      data: {id: state[0].id}
    }
    deepFreeze(state)
    const newState = anecdoteReducer(state, vote)

    expect(newState[0].votes).toEqual(state[0].votes + 1)
  })

  test('calling the addVote action should also result in incrementing the votes', () => {
    const init = {
      type: 'INIT_ANECDOTES',
      data: initialState
    }
    const state = anecdoteReducer(undefined,init)

    const vote = addVote(state[0].id)
    deepFreeze(state)
    const newState = anecdoteReducer(state, vote)

    expect(newState[0].votes).toEqual(state[0].votes + 1)
  })

  test('a new anecdote can be added to the state by the reducer', () => {
    const init = {
      type: 'INIT_ANECDOTES',
      data: initialState
    }
    const state = anecdoteReducer(undefined, init)
    deepFreeze(state)

    const text = "Don't eat yellow snow"

    const newAnecdote = {
      type: 'ADD_ANECDOTE',
      data: {text}
    }

    const newState = anecdoteReducer(state, newAnecdote)

    expect(newState).toHaveLength(state.length + 1)
    expect(newState.map(x => x.content)).toEqual(expect.arrayContaining([text]))
  })

  test('a new anecdote can be added to the state by the action', () => {
    const init = {
      type: 'INIT_ANECDOTES',
      data: initialState
    }
    const state = anecdoteReducer(undefined, init)
    deepFreeze(state)

    const text = "Don't eat yellow snow"

    const newAnecdote = addAnecdote(text)

    const newState = anecdoteReducer(state, newAnecdote)

    expect(newState).toHaveLength(state.length + 1)
  })

})
