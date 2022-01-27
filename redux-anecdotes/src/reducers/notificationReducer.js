const intialNotification = {msg: null}

const reducer = (state = intialNotification, action) => {
    switch(action.type) {
        case 'ADD_NOTIFICATION':
          return {msg: action.data.msg}
        case 'CLEAR':
            return intialNotification
        default: return state
      }
}

export const displayNotification = (msg) => {
  return {
    type: 'ADD_NOTIFICATION',
    data: {msg}
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default reducer