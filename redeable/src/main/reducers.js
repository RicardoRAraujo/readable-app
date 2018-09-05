import { combineReducers } from 'redux'
import postsReducer from '../posts/postsReducer'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
  todo: todoReducer,
  posts: postsReducer
})

export default rootReducer