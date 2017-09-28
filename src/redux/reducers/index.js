import posts from './post'
import comments from './comment'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    comments,
    posts
})
export default rootReducer
