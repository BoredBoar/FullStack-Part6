import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'
import {addVote, addAnecdote} from './anecdoteReducer'

describe('anecdote reducer', () => {


  test('should return a initial state with 6 default anecdotes', () => {
    const action = {
        type: 'DO_NOTHING'
      }

    const newState = anecdoteReducer(undefined, action)
    expect(newState).toHaveLength(6)
  })

  test('adding vote to anecdote should result in incrementing vote total', () => {
    const nothing = {
      type: 'DO_NOTHING'
    }
    const state = anecdoteReducer(undefined,nothing)

    const vote = {
      type: 'ADD_VOTE',
      data: {id: state[0].id}
    }
    deepFreeze(state)
    const newState = anecdoteReducer(state, vote)

    expect(newState[0].votes).toEqual(state[0].votes + 1)
  })

  test('calling the addVote action should also result in incrementing the votes', () => {
    const nothing = {
      type: 'DO_NOTHING'
    }
    const state = anecdoteReducer(undefined,nothing)

    const vote = addVote(state[0].id)
    deepFreeze(state)
    const newState = anecdoteReducer(state, vote)

    expect(newState[0].votes).toEqual(state[0].votes + 1)
  })

  test('a new anecdote can be added to the state by the reducer', () => {
    const nothing = {
      type: 'DO_NOTHING'
    }
    const state = anecdoteReducer(undefined, nothing)
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
    const nothing = {
      type: 'DO_NOTHING'
    }
    const state = anecdoteReducer(undefined, nothing)
    deepFreeze(state)

    const text = "Don't eat yellow snow"

    const newAnecdote = addAnecdote(text)

    const newState = anecdoteReducer(state, newAnecdote)

    expect(newState).toHaveLength(state.length + 1)
  })
})
