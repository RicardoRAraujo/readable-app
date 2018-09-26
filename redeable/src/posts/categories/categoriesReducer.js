const SEARCHED_CATEGORY = 'SEARCHED_CATEGORY'
const SEARCHED_CATEGORY_POSTS = 'SEARCHED_CATEGORY_POSTS'

const INITIAL_STATE = {
  categories: [],
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SEARCHED_CATEGORY:
      return { ...state, categories: action.payload.categories }
    case SEARCHED_CATEGORY_POSTS:
      return { ...state, list: action.payload }  
    default:
      return state
  }
}