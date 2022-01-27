import deepFreeze from 'deep-freeze'
import notify from './notificationReducer'
import { displayNotification, clearNotification} from './notificationReducer'

describe('notification reducer', () => {

    test('should return an initial notification as empty', () => {
      const action = {
          type: 'DO_NOTHING'
        }
  
      const newState = notify(undefined, action)
      expect(newState.msg).toBeNull()
    })

    test('adding a notification alters the state', () => {
      const nothing= {
        type: 'DO_NOTHING'
      }
      const add = {
        type: 'ADD_NOTIFICATION',
        data: {msg: "This is a notification!"}
      }

      const state = notify(undefined, nothing)
      deepFreeze(state)

      const newState = notify(state, add)
      expect(newState.msg).toEqual(add.data.msg)
    })

    test('adding a notification via an action alters the state', () => {
      const nothing= {
        type: 'DO_NOTHING'
      }

      const msg = "This is a notification!"
      const add = displayNotification(msg)

      const state = notify(undefined, nothing)
      deepFreeze(state)

      const newState = notify(state, add)
      expect(newState.msg).toEqual(msg)
    })


    test('clearing a notification alters the state', () => {
      const nothing = {
        type: 'DO_NOTHING'
      }
      const add = {
        type: 'ADD_NOTIFICATION',
        data: {msg: "This is a notification!"}
      }

      const clear = {
        type: 'CLEAR'
      }

      const state = notify(undefined, nothing)
      deepFreeze(state)

      const newState = notify(state, add)
      deepFreeze(newState)

      const clearedState = notify(newState,clear)
      expect(clearedState.msg).toBeNull()
    })

    test('clearing a notification via an action alters the state', () => {
      const nothing = {
        type: 'DO_NOTHING'
      }
      const add = {
        type: 'ADD_NOTIFICATION',
        data: {msg: "This is a notification!"}
      }

      const clear = clearNotification()

      const state = notify(undefined, nothing)
      deepFreeze(state)

      const newState = notify(state, add)
      deepFreeze(newState)

      const clearedState = notify(newState,clear)
      expect(clearedState.msg).toBeNull()
    })

})