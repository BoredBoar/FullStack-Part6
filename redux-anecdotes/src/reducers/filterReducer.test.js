import deepFreeze from 'deep-freeze'
import filterReducer from './filterReducer'
import { filterChange } from './filterReducer'

describe('filter reducer', () => {
  test('intial filter should be empty', () => {
    const action = {
        type: 'DO_NOTHING'
      }

    const newState = filterReducer(undefined, action)
    expect(newState).toEqual('')
  })

  test('setting the filter updates the state', () => {
    const nothing = {
      type: 'DO_NOTHING'
    }
    const initialState = filterReducer(undefined, nothing)
    deepFreeze(initialState)

    const setState = {
      type: 'SET_FILTER',
      filter: 'filter'
    }
    const newState = filterReducer(initialState, setState)
    expect(newState).toEqual(setState.filter)
  })

  test('setting the filter via an action updates the state', () => {
    const nothing = {
      type: 'DO_NOTHING'
    }
    const initialState = filterReducer(undefined, nothing)
    deepFreeze(initialState)

    const filter = 'filter'
    const setState = filterChange(filter)

    const newState = filterReducer(initialState, setState)
    expect(newState).toEqual(filter)
  })
})