import _ from 'lodash'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  var tmpState = {...state}
  switch (action.type) {
    case 'GOOD':
      // tmpState.good++
      return _.mapValues(state,(value,key) => key === 'good' ? value + 1 : value )
    case 'OK':
      return _.mapValues(state,(value,key) => key === 'ok' ? value + 1 : value )
    case 'BAD':
      return _.mapValues(state,(value,key) => key === 'bad' ? value + 1 : value )
    case 'ZERO':
      return {...initialState}
    default: return state
  }
  
}

export default counterReducer