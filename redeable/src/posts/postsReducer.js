const INITIAL_STATE = {
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'POST_SEARCHED':
    case 'CHANGE_SCORE':
      return { ...state, list : action.payload }
    default:
      return state
  }
}