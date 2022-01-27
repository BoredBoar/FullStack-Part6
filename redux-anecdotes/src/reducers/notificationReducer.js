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

export default reducer