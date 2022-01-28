const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VOTE':
      return state.map(anecdote => anecdote.id !== action.data.id ? anecdote : {...anecdote, votes : anecdote.votes + 1 })
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    data: {id}
  }
}

export const addAnecdote = (data) => {
  return {
    type: 'ADD_ANECDOTE',
    data
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default reducer