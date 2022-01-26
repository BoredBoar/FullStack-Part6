import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'
import {addVote} from './anecdoteReducer'

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
})
